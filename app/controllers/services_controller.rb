class ServicesController < ApplicationController
  before_action :authenticate_user!
  def index
    @service = Service.all
    #query = "Select messages.content, messages.sender_user_id, users.first_name, users.last_name from messages, users where messages.sender_user_id=users.id and messages.sender_user_id=4"
    # query = "select services.hourly_rate, users.first_name, users.last_name, users.profile_pic, category.id from "
  end

  def show
    @service = Service.where(user_id: params[:id])
    @categories= Category.all
    @reviews = Review.where(user_id: params[:id])
    @user = User.find(params[:id])
    @isUser = User.isUser(params[:id].to_i, current_user.id.to_i)
    @userInfo = {
      email: @user.email,
      id: @user.id,
      first_name: @user.first_name,
      last_name: @user.last_name
    }
    puts @user.email
  end

  def new
    @service = params[:service]

  end

  def edit

  end

  def destroy

  end

end
