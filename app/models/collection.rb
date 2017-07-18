class Collection < ApplicationRecord
  scope :with_jewelries, -> { order(:position).includes(:jewelries).where(visible: true) }
  has_many :jewelries, -> { order(:position) }

  has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/
  has_attached_file :title_image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :title_image, content_type: /\Aimage\/.*\z/
end
