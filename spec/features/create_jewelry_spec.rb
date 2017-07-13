require 'rails_helper'

feature 'Add a jewelry' do
  let(:admin) { create :admin }
  let!(:collection_1) { create :collection }
  let!(:collection_2) { create :collection, name: 'Collection 2' }

  scenario 'with correct infos' do
    login_as admin

    visit jewelries_path
    expect(page.current_path).to eq(jewelries_path)

    click_link 'Add New Jewelry'

    expect(page.current_path).to eq(new_jewelry_path)
    within 'form' do
      fill_in 'Name', with: 'Test Name'
      fill_in 'Inspiration', with: 'Test Inspiration'
      fill_in 'Material', with: 'Test Material'
      attach_file('jewelry_picture', File.absolute_path("#{Rails.root}/spec/support/images/image.jpg"))
      choose 'Collection 2'
      click_button 'Create Jewelry'
    end
    expect(page.current_path).to eq(jewelries_path)
    expect(page).to have_content('Test Name')
    expect(page).to have_content(collection_2.name)
    expect(page).to have_content('Jewelry was successfully created')
  end

end
