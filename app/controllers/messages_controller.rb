class MessagesController < ApplicationController
  before_action :authenticate_user!
def index
    #@messages = Message.select("messages.*, users.*").joins(:users).where("sender_user_id=4")
    #query = "Select messages.content, messages.sender_user_id, users.first_name, users.last_name from messages, users where messages.sender_user_id=users.id and messages.sender_user_id=4"
    p "printing current_user"
    p"here it is"
    puts current_user.id
    @messages = Message
                .joins("left outer join users on messages.sender_user_id = users.id")
                .select("messages.*, users.first_name, users.last_name")
                .where("messages.receiver_user_id=#{current_user.id}")
                .order('created_at DESC')
    puts params[:id]
    #@messages = Message.find_by_sql(query)
    #@messages = Message.all       
    #p @messages
    # @unreadMessages = unreadMessages
    puts @messages.inspect       
  end

  def create
    p params[:content]
    @message = Message.new(content: params[:content],
                 sender_user_id: current_user.id,
                 receiver_user_id: params[:receiver_user_id])
    p @message
    if @message.save
      puts saved
    end
  end

  def destroy
    p "im in delete of message controller"
    
    delMessage = Message.find_by(id: params[:id])
    p delMessage
    delMessage.destroy
  end
end
