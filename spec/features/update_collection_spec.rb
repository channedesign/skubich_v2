require 'rails_helper'

feature 'Edit Collection' do
  let(:admin) { create :admin }
  let!(:col) { create :collection }

  scenario 'with valid infos' do
    login_as admin

    visit collections_path
    expect(page.current_path).to eq(collections_path)
    within "#collection-#{col.id}" do
      click_on 'Edit'
    end
    expect(page.current_path).to eq(edit_collection_path(col.id))
    expect(page).to have_selector("input[value=#{col.name}]")
    expect(page).to have_selector("img[src='#{col.picture.url}']")
    expect(page).to have_content('Upload Different Picture')

    within 'form' do
      fill_in 'Name', with: 'Collection Name after update'
      attach_file('collection_picture', File.absolute_path("#{Rails.root}/spec/support/images/image-2.jpg"))
      click_button 'Update Collection'
    end

    expect(page.current_path).to eq(collection_path(col.id))
    expect(page).to have_content('Collection Name after update')
    expect(page).to have_content('Collection was successfully updated')
  end


end
