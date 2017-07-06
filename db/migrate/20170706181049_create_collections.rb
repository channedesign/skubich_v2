class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.string :name
      t.boolean :visible, default: false
      t.integer :position
      t.attachment :picture

      t.timestamps
    end
  end
end
