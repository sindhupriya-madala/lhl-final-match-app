class ServicesController < ApplicationController
  before_action :authenticate_user!
  def index
    @services = Service.all
  end

  def show
    @service = Service.find params[:id]
  end

end
