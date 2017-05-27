class HomeController < ApplicationController
  
  def index
    @categories = Category.all
    p @categories
  end
  
end
