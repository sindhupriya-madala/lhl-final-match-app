class ReviewsController < ApplicationController
  before_action :authenticate_user!
  def index
    @reviews = Review.all    
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    p @review
    if @review.save
      puts saved
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    redirect_to service_url(review.service), notice: 'Deleted Review'
  end

  private
  
  def review_params
    params.require(:review).permit(:service_id, :description, :rating)
  end

end
