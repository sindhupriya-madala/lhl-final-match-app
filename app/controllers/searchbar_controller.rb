class SearchbarController < ApplicationController


  def index
    p "iam in search bar controller"
    p params[:search]
    # res = search(params[:search])
    # p res
    search = params[:search]
    @cat = Category
        .where(" (categories.name) LIKE ?", "%#{search}%").first

    # @cat = Category.find_by(name: params[:search])
    puts 'cat is'
    p @cat
    @services = Service
        .joins("left outer join users on services.user_id = users.id")
        .joins("left outer join categories on categories.id = services.category_id")
        .joins("left outer join reviews on services.id = reviews.service_id")
        .select("services.*, users.first_name, users.last_name, users.avatar, categories.name, avg(reviews.rating) AS average_rating")
        .where("services.category_id = #{@cat.id}")
        .group("categories.name, services.id, users.first_name, users.last_name, users.avatar ")
    # SELECT services.*, users.first_name, users.last_name, users.avatar, avg(reviews.rating) FROM services left outer join users on services.user_id = users.id inner join reviews on services.id = reviews.service_id WHERE (services.category_id = 14) group by services.id,users.first_name, users.last_name, users.avatar ORDER BY created_at DESC;    
    # @services = Service.joins(:category).joins(:user).search(params[:search])
    puts "services is"
    puts @services

    respond_to do |format|
      format.json  { render :json => @services }
    end

  end

end
