class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :host_id
      t.string :title
      t.string :event_type
      t.string :description
      t.string :dress_code
      t.string :price, default: 'Free'
      t.string :open_to
      t.integer :likes, default: 0
      t.integer :rating, default: 0
      t.string :location
      t.string :picture
      t.boolean :active, default: true
      t.time :closing_time
      t.timestamps
    end
  end
end
