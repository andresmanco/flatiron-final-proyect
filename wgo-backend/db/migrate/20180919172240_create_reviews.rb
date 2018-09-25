class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :guest_id
      t.integer :event_id
      t.string :comment
      t.date :date
      t.timestamps
    end
  end
end
