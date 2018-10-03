class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fullname
      t.string :username
      t.string :email
      t.string :picture
      t.string :about
      t.string :password_digest
      t.string :location, default: 'offline'
      t.timestamps
    end
  end
end
