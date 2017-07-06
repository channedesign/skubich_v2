require 'rails_helper'

RSpec.describe AdminSectionController, type: :controller do

  describe "GET #index" do
    login_admin
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end
