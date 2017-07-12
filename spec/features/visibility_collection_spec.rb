require 'rails_helper'

feature 'Change Collection Visibility', js: true do
  let(:admin) { create :admin }
  let!(:collection) { create :collection }
  let!(:visible_collection) { create :collection, visible: true }

  scenario 'To True' do

    login_as admin

    visit collections_path
    within "#collection-#{collection.id}" do
      click_link 'Not Visible'
    end
    expect(page.current_path).to eq(collections_path)
    expect(page.find("#collection-#{collection.id}")).not_to have_content('Not Visible')
    expect(page.find("#collection-#{collection.id}")['class']).to match('box-green')

  end

  scenario 'To False' do

    login_as admin

    visit collections_path
    within "#collection-#{visible_collection.id}" do
      click_link 'Visible'
    end
    expect(page.current_path).to eq(collections_path)
    expect(page.find("#collection-#{visible_collection.id}")).to have_content('Not Visible')
    expect(page.find("#collection-#{visible_collection.id}")['class']).to match('box-red')

  end

end
