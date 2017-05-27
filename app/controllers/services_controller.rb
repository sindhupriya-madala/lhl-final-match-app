class ServicesController < ApplicationController
  before_action :authenticate_user!
  def index
    p " i am here"
    @services = Service.where(category_id: params[:id]);
    #query = "Select messages.content, messages.sender_user_id, users.first_name, users.last_name from messages, users where messages.sender_user_id=users.id and messages.sender_user_id=4"
    #query = "select services.hourly_rate, users.first_name, users.last_name, users.profile_pic, category.id from "
  end

  def show
    @service = Service.where(id: 1)
    @user = User.find(1)
    puts @user
  end

  def new

  end

  def edit

  end

  def destroy

  end

end
