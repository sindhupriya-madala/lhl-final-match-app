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
    @ser    = Service.find_by(user_id: params[:id])
    @id = params[:id]
    @service = Service
        .joins("left outer join categories on categories.id = services.category_id")
        .joins("left outer join reviews on services.id = reviews.service_id")
        .select("services.*, categories.name, avg(reviews.rating) AS average_rating")
        .where("services.user_id=#{@ser.user_id}")
        .group("categories.name, services.id")
    
    p @service
    @service = @service.first
    @categories = Category.all
    # @reviews    = Review.where(user_id: params[:id])
    if(@service) 
      @reviews = Review
              .joins("left outer join users on Reviews.user_id = users.id")
              .select("reviews.*, users.first_name, users.last_name, avg(reviews.rating) AS average_rating ")
              .where("reviews.service_id = #{@ser.id}")
              .group("reviews.id, users.first_name, users.last_name")
              .order('created_at DESC')
    end
    p @reviews
    @user       = User.find(params[:id])
    @isUser     = User.isUser(params[:id].to_i, current_user.id.to_i)
    puts @user.avatar
    @userInfo = {
      email: @user.email,
      id: @user.id,
      first_name: @user.first_name,
      last_name: @user.last_name,
      avatar: @user.avatar.to_s
    }

  end

  def create
    @service = Service.new(service_params)
    @service[:user_id] = current_user.id.to_i
    puts @service

    if @service.save
      puts "saved!!!"
      respond_to do |format|
        format.json  { render :json => @service } 
      end
    end
  end

  def edit
    editService = Service.find_by(id: params[:id])
    editService.hourly_rate = params[:hourly_rate]
    editService.description = params[:description]
    if editService.save
    
      userofservice = User.find_by(id: editService.user_id)
      userofservice.first_name = params[:first_name]
      userofservice.last_name = params[:last_name]
      if userofservice.save
        service = Service.find_by(id: params[:id])
        respond_to do |format|
            format.json  { render :json => service } 
        end
      end
    end
  end

  def destroy
    p "im in delete of service controller"
    
    delService = Service.find_by(id: params[:id])
    reviews = Review.where(service_id: delService.id)
    p reviews
    p delService
    reviews.destroy_all
    delService.destroy
  end

  def getUserByReview(id)
    user = User.find(id)
    return (user.first_name).concat(' ').concat(user.last_name)
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
