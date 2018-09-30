class Event < ApplicationRecord
  belongs_to :host, class_name: 'User'
  has_many :likes
  has_many :comments
end
