require "rails_helper"

RSpec.describe CollectionsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/admin/collections").to route_to("collections#index")
    end

    it "routes to #new" do
      expect(:get => "/admin/collections/new").to route_to("collections#new")
    end

    it "routes to #show" do
      expect(:get => "/admin/collections/1").to route_to("collections#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/admin/collections/1/edit").to route_to("collections#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/admin/collections").to route_to("collections#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/admin/collections/1").to route_to("collections#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/admin/collections/1").to route_to("collections#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/admin/collections/1").to route_to("collections#destroy", :id => "1")
    end

  end
end
