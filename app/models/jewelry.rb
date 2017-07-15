class Jewelry < ApplicationRecord
  belongs_to :collection

  before_create :increment_position

  has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/

  private
    def increment_position
      self.position = Jewelry.all.length + 1
    end
end
