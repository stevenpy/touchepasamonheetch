class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :session_id
      t.string :country
      t.boolean :candy_fan
      t.boolean :night_club_fan
      t.string :fan_type

      t.timestamps
    end
  end
end
