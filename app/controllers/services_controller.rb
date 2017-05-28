class ServicesController < ApplicationController
  before_action :authenticate_user!
  def index
    p " i am here"
    @services = Service.where(category_id: params[:id]);
    #query = "Select messages.content, messages.sender_user_id, users.first_name, users.last_name from messages, users where messages.sender_user_id=users.id and messages.sender_user_id=4"
    #query = "select services.hourly_rate, users.first_name, users.last_name, users.profile_pic, category.id from "
    render template: "service_cards/index"
  end

  def show
    @service    = Service.where(user_id: params[:id])
    @categories = Category.all
    @reviews    = Review.where(user_id: params[:id])
    @user       = User.find(params[:id])
    @isUser     = User.isUser(params[:id].to_i, current_user.id.to_i)
    @userInfo = {
      email: @user.email,
      id: @user.id,
      first_name: @user.first_name,
      last_name: @user.last_name
    }
    p @userInfo
  end

  def create
    @service = Service.new(service_params)
    @service[:user_id] = current_user.id.to_i
    puts @service

    if @service.save
      puts "saved!!!"
    end
  end

  def edit

  end

  def destroy

  end

  private

  def service_params
    params.require(:service).permit(
      :category_id,
      :description,
      :hourly_rate
    )
  end
end
