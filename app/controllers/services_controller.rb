class ServicesController < ApplicationController
  before_action :authenticate_user!
  def index
    @service = Service.all
    #query = "Select messages.content, messages.sender_user_id, users.first_name, users.last_name from messages, users where messages.sender_user_id=users.id and messages.sender_user_id=4"
    # query = "select services.hourly_rate, users.first_name, users.last_name, users.profile_pic, category.id from "
  end

  def show
    @service = Service.where(id: 1)
    @user = User.where(id: 1)
    p @user
  end

  def new

  end

  def edit

  end

  def destroy

  end

end
