require 'rails_helper'

feature 'Change Jewelry Visibility', js: true do
  let(:admin) { create :admin }
  let!(:collection) { create :collection }
  let!(:jewelry) { create :jewelry }
  let!(:visible_jewel) { create :jewelry, visible: true }

  scenario 'To True' do

    login_as admin

    visit jewelries_path
    expect(page.current_path).to eq(jewelries_path)

    within "tbody #jewelry-#{jewelry.id}" do
      expect(page).to have_selector("td.box-red")
      click_link 'No'
      expect(page).not_to have_selector("td.box-red")
      expect(page.find('.visible-column')).not_to have_content('No')
      expect(page).to have_selector('td.box-green')
      expect(page.find('.visible-column')).to have_content('Yes')
    end

  end

  scenario 'To False' do

    login_as admin

    visit jewelries_path
    expect(page.current_path).to eq(jewelries_path)

    within "tbody #jewelry-#{visible_jewel.id}" do
      expect(page).to have_selector("td.box-green")
      click_link 'Yes'
      expect(page).not_to have_selector("td.box-green")
      expect(page.find('.visible-column')).not_to have_content('Yes')
      expect(page).to have_selector('td.box-red')
      expect(page.find('.visible-column')).to have_content('No')
    end

  end

end
