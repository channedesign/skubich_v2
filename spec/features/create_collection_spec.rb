require 'rails_helper'

feature 'Add A New Collection' do
  let(:admin) { create :admin }

  scenario 'Allow Admin to create a collection' do
    login_as admin

    visit collections_path
    expect(page.current_path).to eq(collections_path)

    click_on 'Add New Collection'
    expect(page.current_path).to eq(new_collection_path)

    within 'form' do
      fill_in 'Name', with: 'Collection Name'
      attach_file('collection_picture', File.absolute_path("#{Rails.root}/spec/support/images/image.jpg"))
      click_button 'Create Collection'
    end

    expect(page.current_path).to eq(collections_path)
    expect(page).to have_content('Collection was successfully created')
    expect(page).to have_content('Collection Name')

  end

end
