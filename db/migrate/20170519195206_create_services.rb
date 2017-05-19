class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.references :user
      t.references :category
      t.string :description
      t.integer :hourly_rate

      t.timestamps
    end
  end
end
