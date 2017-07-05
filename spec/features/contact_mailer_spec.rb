require 'rails_helper'

feature 'Send Message from Contact form', js: true do
  let(:sender) { build :user }
  let(:wrong_sender) { build :user, email: 'bob' }
  scenario 'with correct credentials' do


    visit root_path(anchor: 'contact')

    within 'form' do
      fill_in 'name', with: sender.name
      fill_in 'email', with: sender.email
      fill_in 'message', with: sender.message
      click_button 'SEND'
    end

    expect(page).to have_content("Your message was sent successfully!")

  end

  scenario 'with incorrect credentials' do
    visit root_path(anchor: 'contact')

    within 'form' do
      fill_in 'name', with: ''
      fill_in 'email', with: ''
      fill_in 'message', with: ''
      click_button 'SEND'
    end

    expect(page).to have_content("Your message was NOT sent!")
  end



end
