class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end
  
  def show
    p "in category controller show method"
    @category = Category.find(params[:id])
    @services = Service
        .joins("left outer join users on services.user_id = users.id")
        .select("services.*, users.first_name, users.last_name")
        .where("services.category_id = #{@category.id}")
        .order('created_at DESC')

    puts @services
  end

end
