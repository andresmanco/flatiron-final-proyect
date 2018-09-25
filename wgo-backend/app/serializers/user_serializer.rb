class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :picture, :location
  has_many :events, foreign_key: :host_id
  has_many :reviews, foreign_key: :guest_id
end
