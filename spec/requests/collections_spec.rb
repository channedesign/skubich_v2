require 'rails_helper'

RSpec.describe "Collections", type: :request do
  let(:admin) { create :admin }
  describe "GET /collections" do

    it "works! (now write some real specs)" do
      login_as admin
      get collections_path
      expect(response).to have_http_status(200)
    end
  end
end
