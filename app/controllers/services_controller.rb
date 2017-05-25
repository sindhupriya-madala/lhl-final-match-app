class ServicesController < ApplicationController
  before_action :authenticate_user!
  def index
    @service = Service.where
    
  end

  def show
    @service = Service.where(id: 1)
    @user = User.where(id: 1)
    # redirect_to '/services/1'
        

  end

end
