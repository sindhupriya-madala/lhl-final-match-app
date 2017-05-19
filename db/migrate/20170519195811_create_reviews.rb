class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.references :user, foreign_key: true
      t.references :service, foreign_key: true
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
