require 'rails_helper'

feature 'Sign Admin In' do

  let(:admin) { create :admin }

  scenario 'with valid credential' do

    visit admin_path
    within 'form' do
      fill_in 'Email', with: admin.email
      fill_in 'Password', with: admin.password
      click_button 'Log in'
    end

    expect(page.current_path).to eq(admin_path)
    expect(page).to have_content('Signed in successfully')

  end

  scenario 'with invalid credential' do

    visit admin_path
    within 'form' do
      fill_in 'Email', with: 'bob@bob.com'
      fill_in 'Password', with: 'pass'
      click_button 'Log in'
    end

    expect(page.current_path).to eq(new_admin_session_path)
    expect(page).to have_content("Invalid Email or password")

  end

end
