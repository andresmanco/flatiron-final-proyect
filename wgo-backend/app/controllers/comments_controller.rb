class CommentsController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    render json: Comment.all
  end

  def create
    render json: Comment.create(content: params[:content], event_id: params[:eventId], guest_id: my_current_user.id)
  end

  private

  def review_params
    params.require(:comment).permit(:guest_id, :event_id, :content)
  end
end
