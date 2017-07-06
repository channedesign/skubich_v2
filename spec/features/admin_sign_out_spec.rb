require 'rails_helper'

feature 'Sign Admin Out' do

  let(:admin) { create :admin }

  scenario 'when click on log out' do

    login_as admin

    visit admin_path

    expect(page.current_path).to eq(admin_path)
    expect(page).to have_content('LogOut')

    click_on 'LogOut'
    expect(page.current_path).to eq(root_path)
    expect(page).to have_content('Signed out successfully')

  end

end
