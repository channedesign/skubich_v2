FactoryGirl.define do
  factory :collection do
    name "MyString"
    visible false
    position 1
    picture { fixture_file_upload( "#{Rails.root}/spec/support/images/image.jpg", 'image/jpeg') }
  end
end
