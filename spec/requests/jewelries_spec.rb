require 'rails_helper'

RSpec.describe "Jewelries", type: :request do
  let(:admin) { create :admin }
  describe "GET /jewelries" do
    it "works! (now write some real specs)" do
      login_as admin
      get jewelries_path
      expect(response).to have_http_status(200)
    end
  end
end
