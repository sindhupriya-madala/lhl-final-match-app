class SearchbarController < ApplicationController


  def index
    p "iam in search bar controller"
    p params[:search]
    # res = search(params[:search])
    # p res
    @cat = Category.find_by(name: params[:search])
    puts 'cat is'
    p @cat
    @services = Service
        .joins("left outer join users on services.user_id = users.id")
        .joins("left outer join categories on categories.id = services.category_id")
        .select("services.*, users.first_name, users.last_name, users.avatar, categories.name")
        .where("services.category_id = #{@cat.id}")
        
    # @services = Service.joins(:category).joins(:user).search(params[:search])
    puts "services is"
    puts @services

    respond_to do |format|
      format.json  { render :json => @services }
    end

  end

end
