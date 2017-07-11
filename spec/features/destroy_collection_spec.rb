require 'rails_helper'

feature 'Delete a Collection' do
  let(:admin) { create :admin }
  let!(:col) { create :collection }

  scenario 'when cliked on delete' do
    login_as admin

    visit collections_path
    expect(page.current_path).to eq(collections_path)

    within "#collection-#{col.id}" do
      click_link 'Delete'
    end

    expect(page).not_to have_css("div#collection-#{col.id}")
  end

end
