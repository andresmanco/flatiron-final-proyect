class User < ApplicationRecord
  # As a guest
  has_many :likes, foreign_key: :guest_id
  has_many :comments, foreign_key: :guest_id
  # As a host
  has_many :events, foreign_key: :host_id

  has_secure_password
end
