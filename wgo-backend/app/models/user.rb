class User < ApplicationRecord
# As a host
has_many :events, foreign_key: :host_id
# As a guest
has_many :reviews, foreign_key: :guest_id

has_secure_password
end
