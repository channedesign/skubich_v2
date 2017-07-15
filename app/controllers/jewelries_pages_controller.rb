class JewelriesPagesController < ApplicationController
  def index
    @collections = Collection.order(:position).includes(:jewelries).where(jewelries: { visible: true })
  end
end
