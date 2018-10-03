class EventsController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    render json: Event.all
  end

  def create
    e = params[:event]
    render json: Event.create(host_id: my_current_user.id, title: e[:title], picture: e[:picture], description: e[:description], event_type: e[:eventType], dress_code: e[:dressCode], price: e[:price], open_to: e[:openTo], location: e[:location], closing_time: e[:closingTime])
  end

  def update
    e = params[:event]
    Event.find(e[:id]).update(title: e[:title], picture: e[:picture], description: e[:description], event_type: e[:eventType], dress_code: e[:dressCode], price: e[:price], open_to: e[:openTo], closing_time: e[:closingTime])
    render json: Event.find(e[:id])
  end

  def destroy
    Event.find(params[:id]).update(active: false)
    render json: Event.find(params[:id])
  end
end
