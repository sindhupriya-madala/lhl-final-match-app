class ServicesController < ApplicationController

  def index
    @services = Service.all
    
  end

  def show
    @service = Service.where(id: 1)
    @user = User.where(id: 1)
    p @service
        

  end

end
