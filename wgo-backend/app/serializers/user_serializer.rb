class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :picture, :location, :about
  has_many :events, foreign_key: :host_id
  has_many :comments, foreign_key: :guest_id
  has_many :likes, foreign_key: :guest_id
end
