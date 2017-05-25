class ServicesController < ApplicationController
  before_action :authenticate_user!
  def index
    @services = Service.where
    p @services
    p "hello from service controller"
    
  end

  def show
    @service = Service.where(id: 1)
    @user = User.where(id: 1)
    # redirect_to '/services/1'
        

  end

end
