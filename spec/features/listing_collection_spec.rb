require 'rails_helper'

feature 'List all Collections' do
  let(:admin) { create :admin }
  let!(:collection_1) { create :collection }
  let!(:collection_2) { create :collection, name: 'Collection 2', position: 3 }
  let!(:collection_3) { create :collection, name: 'Collection 3', position: 2 }

  scenario 'By positions' do
    login_as admin

    visit collections_path
    expect(page.current_path).to eq(collections_path)
    expect(page.find('.collection-wrapper-div:nth-of-type(1)')).to have_content(collection_1.name)
    expect(page.find('.collection-wrapper-div:nth-of-type(2)')).to have_content(collection_3.name)
    expect(page.find('.collection-wrapper-div:nth-of-type(3)')).to have_content(collection_2.name)

  end

end
