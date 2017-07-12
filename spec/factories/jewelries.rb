FactoryGirl.define do
  factory :jewelry do
    name "MyString"
    inspiration "MyString"
    material "MyString"
    visible false
    position 1
    picture { fixture_file_upload( "#{Rails.root}/spec/support/images/image.jpg", 'image/jpeg') }
    collection 
  end
end
