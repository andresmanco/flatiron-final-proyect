class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :date

  belongs_to :event
  belongs_to :guest, class_name: 'User'
end
