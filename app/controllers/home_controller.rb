class HomeController < ApplicationController
  
  def index
    @categories = Category.all
    @current_user = current_user
    # @services = Service.all
    @services = Service
        .joins("left outer join users on services.user_id = users.id")
        .joins("left outer join categories on categories.id = services.category_id")
        .joins("left outer join reviews on services.id = reviews.service_id")
        .select("services.*, users.first_name, users.last_name, users.avatar, categories.name, avg(reviews.rating) AS average_rating")
        .group("categories.name, services.id, users.first_name, users.last_name, users.avatar ")
    
  end
  
end
