class CommentsController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    render json: Comment.all
  end

  def create
    render json: Comment.create(content: params[:content], event_id: params[:event_id], guest_id: my_current_user.id)
  end

  def destroy
    render json: Comment.find(params[:id]).destroy
  end
end
