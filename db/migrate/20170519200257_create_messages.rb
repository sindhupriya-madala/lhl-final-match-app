class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :content
      t.references :sender_user
      t.references :receiver_user
      t.timestamps
    end
  end
end
