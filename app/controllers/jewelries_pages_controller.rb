class JewelriesPagesController < ApplicationController
  def index
    @collections = Collection.with_jewelries
  end
end
