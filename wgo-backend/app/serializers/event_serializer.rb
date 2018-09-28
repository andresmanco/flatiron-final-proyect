class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :picture, :event_type, :description, :dress_code, :price, :open_to, :likes, :rating, :location, :active, :closing_time, :created_at

  belongs_to :host, class_name: 'User'
end
