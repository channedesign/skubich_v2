class CreateJewelries < ActiveRecord::Migration[5.1]
  def change
    create_table :jewelries do |t|
      t.string :name
      t.string :inspiration
      t.string :material
      t.boolean :visible, default: false
      t.integer :position
      t.attachment :picture
      t.references :collection, foreign_key: true

      t.timestamps
    end
  end
end
