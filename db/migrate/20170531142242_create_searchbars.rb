class CreateSearchbars < ActiveRecord::Migration[5.1]
  def change
    create_table :searchbars do |t|

      t.timestamps
    end
  end
end
