class LikesController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    render json: Like.all
  end

  def create
    render json: Like.create(event_id: params[:eventId], guest_id: my_current_user.id)
  end

  private

  def review_params
    params.require(:like).permit(:guest_id, :event_id)
  end
end
