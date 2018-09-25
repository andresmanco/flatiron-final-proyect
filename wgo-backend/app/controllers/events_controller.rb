class EventsController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    render json: Event.all
  end

  def create
    e = params[:event]
    render json: Event.create(host_id: my_current_user.id, title: e[:title], description: e[:description], event_type: e[:eventType], dress_code: e[:dressCode], price: e[:price], open_to: e[:openTo], location: e[:location], closing_time: e[:closingTime])
  end

  private

  def event_params 
    params.require(:event).permit(:host_id, :title, :event_type, :description, :dress_code, :price, :open_to, :likes, :rating, :location, :active, :closing_time)
  end
end
