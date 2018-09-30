class LikesController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    render json: Like.all
  end

  def create
    render json: Like.create(event_id: params[:event_id], guest_id: my_current_user.id)
  end

  def destroy
    render json: Like.find(params[:id]).destroy
  end
end
