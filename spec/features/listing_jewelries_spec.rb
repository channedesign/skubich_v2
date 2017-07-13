require 'rails_helper'

feature 'List all Jewelries' do
  let(:admin) { create :admin }
  let!(:collection) { create :collection }
  let!(:jewelry_1) { create :jewelry, position: 1 }
  let!(:jewelry_2) { create :jewelry, name: 'jewelry_2', position: 3 }
  let!(:jewelry_3) { create :jewelry, name: 'jewelry_3', position: 2 }

  scenario 'By positions' do
    login_as admin

    visit jewelries_path
    expect(page.current_path).to eq(jewelries_path)
    expect(page.find('tbody tr:nth-of-type(1)')).to have_content(jewelry_1.name)
    expect(page.find('tbody tr:nth-of-type(2)')).to have_content(jewelry_3.name)
    expect(page.find('tbody tr:nth-of-type(3)')).to have_content(jewelry_2.name)
  end

end
