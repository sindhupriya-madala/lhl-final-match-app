class MessagesController < ApplicationController
    before_action :authenticate_user!
    def index
        
        
        
        #@messages = Message.select("messages.*, users.*").joins(:users).where("sender_user_id=4")
        #query = "Select messages.content, messages.sender_user_id, users.first_name, users.last_name from messages, users where messages.sender_user_id=users.id and messages.sender_user_id=4"
        @messages = Message.joins("left outer join users on messages.sender_user_id = users.id").select("messages.*, users.first_name, users.last_name").where("messages.sender_user_id=5")

        #@messages = Message.find_by_sql(query)
        #@messages = Message.all       
        #p @messages
        # @unreadMessages = unreadMessages
        puts @messages.inspect       
    end

    def create

    end

    def destroy

    end
end
