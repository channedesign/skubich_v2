class JewelriesPagesController < ApplicationController
  def index
    @collections = Collection.order(:position).includes(:jewelries)
  end
end
