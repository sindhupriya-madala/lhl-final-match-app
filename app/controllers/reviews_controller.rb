class ReviewsController < ApplicationController

  before_filter

  def index
    @reviews = Review.all
  end

  def create
    @review = @service.reviews.create(review_params)
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
