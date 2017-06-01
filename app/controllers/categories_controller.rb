class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end
  
  def show
    p "in category controller show method"
    @category = Category.find(params[:id])
    @services = Service
        .joins("left outer join users on services.user_id = users.id")
        .select("services.*, users.first_name, users.last_name, users.avatar")
        .where("services.category_id = #{@category.id}")
        .order('created_at DESC')

    @services = Service
        .joins("left outer join users on services.user_id = users.id")
        .joins("left outer join categories on categories.id = services.category_id")
        .joins("left outer join reviews on services.id = reviews.service_id")
        .select("services.*, users.first_name, users.last_name, users.avatar, categories.name, avg(reviews.rating) AS average_rating")
        .where("services.category_id = #{@category.id}")
        .group("categories.name, services.id, users.first_name, users.last_name, users.avatar ")

    p @services
    respond_to do |format|
      format.json  { render :json => @services } # don't do msg.to_json
    end
  end

end
