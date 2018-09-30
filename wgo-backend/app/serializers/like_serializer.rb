class LikeSerializer < ActiveModel::Serializer
  attributes :id, :guest_id, :event_id

  # belongs_to :event
  # belongs_to :guest, class_name: 'User'
end
