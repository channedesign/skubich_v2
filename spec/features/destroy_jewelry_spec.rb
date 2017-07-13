require 'rails_helper'

feature 'Delete jewelry', js: true do

  let(:admin) { create :admin }
  let!(:collection) { create :collection }
  let!(:jewelry) { create :jewelry }

  scenario 'When clicked on Delete' do
    login_as admin

    visit jewelries_path
    expect(page.current_path).to eq(jewelries_path)

    expect_page_not_to_reload do
      within "tbody #jewelry-#{jewelry.id}" do
        click_link 'Delete'
      end
      page.accept_alert 'Are you sure?'
    end
    expect(page).not_to have_selector("tbody #jewelry-#{jewelry.id}")


  end

  # Handy when making AJAX request
  def expect_page_not_to_reload
    page.evaluate_script "$(document.body).addClass('i-should-not-be-here')"
    expect(page).to have_selector("body.i-should-not-be-here")
    yield
    sleep 1
    expect(page).to have_selector("body.i-should-not-be-here")
  end
end
