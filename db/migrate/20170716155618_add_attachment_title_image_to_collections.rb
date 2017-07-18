class AddAttachmentTitleImageToCollections < ActiveRecord::Migration[5.1]
  def self.up
    change_table :collections do |t|
      t.attachment :title_image
    end
  end

  def self.down
    remove_attachment :collections, :title_image
  end
end
