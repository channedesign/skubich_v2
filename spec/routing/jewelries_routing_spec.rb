require "rails_helper"

RSpec.describe JewelriesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/admin/jewelries").to route_to("jewelries#index")
    end

    it "routes to #new" do
      expect(:get => "/admin/jewelries/new").to route_to("jewelries#new")
    end

    it "routes to #show" do
      expect(:get => "/admin/jewelries/1").to route_to("jewelries#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/admin/jewelries/1/edit").to route_to("jewelries#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/admin/jewelries").to route_to("jewelries#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/admin/jewelries/1").to route_to("jewelries#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/admin/jewelries/1").to route_to("jewelries#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/admin/jewelries/1").to route_to("jewelries#destroy", :id => "1")
    end

  end
end
