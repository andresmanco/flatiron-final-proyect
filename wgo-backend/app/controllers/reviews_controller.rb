class ReviewsController < ApplicationController
  skip_before_action :authenticate, only: [:index]
  
  def index
    render json: Review.all
  end

  # def show
  #   render json: Review.find(params[:id])
  # end
#
  # def create
  #   render json: Review.create(review_params)
  # end
#
  # def update
  #   Review.find(params[:id]).update(review_params)
  #   render json: Review.find(params[:id])
  # end

  # def destroy
  #   render json: Review.find(params[:id]).destroy
  # end

  private

  def review_params
    params.require(:review).permit(:guest_id, :event_id, :comment, :date)
  end
end
