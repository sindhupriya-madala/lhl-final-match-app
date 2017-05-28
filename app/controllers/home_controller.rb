class HomeController < ApplicationController
  
  def index
    @categories = Category.all
    @current_user = current_user
    @services = Service.all
    p @categories
    p "=============================="
    puts @current_user
    p"================================"
  end
  
end
