class HomeController < ApplicationController
  
  def index
    @categories = Category.all
    @current_user = current_user
    p @categories
    p "=============================="
    puts @current_user
    p"================================"
  end
  
end
