class HomeController < ApplicationController
  
  def index
    @categories = Category.all
    @current_user = current_user
    # @services = Service.all
    @services = Service
        .joins("left outer join users on services.user_id = users.id")
        .select("services.*, users.first_name, users.last_name")
        .order('created_at DESC')
    
  end
  
end
