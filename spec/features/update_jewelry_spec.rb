require 'rails_helper'

feature 'Edit Jewelry' do

  let(:admin) { create :admin }
  let!(:collection) { create :collection }
  let!(:jewelry) { create :jewelry }
  let!(:jewelry_2) { create :jewelry, name: 'J 2' }

  scenario 'With Valid Infos' do

    login_as admin

    visit jewelries_path
    expect(page.current_path).to eq(jewelries_path)

    within "tbody #jewelry-#{jewelry.id}" do
      expect(page).to have_content(jewelry.name)
      click_link 'Edit'
    end

    expect(page.current_path).to eq(edit_jewelry_path(jewelry.id))

    within 'form' do
      fill_in 'Name', with: 'A different Jewel'
      click_button 'Update Jewelry'
    end

    expect(page.current_path).to eq(jewelries_path)
    expect(page.find("tbody #jewelry-#{jewelry.id}")).to have_content('A different Jewel')
    expect(page).to have_content('Jewelry was successfully updated')

  end

end
