class CommentSerializer < ActiveModel::Serializer
  attributes :id, :guest_id, :event_id, :content, :created_at

  # belongs_to :event
  # belongs_to :guest, class_name: 'User'
end
