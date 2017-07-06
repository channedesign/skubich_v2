require 'rails_helper'

RSpec.describe "collections/edit", type: :view do
  before(:each) do
    @collection = assign(:collection, Collection.create!(
      :name => "MyString",
      :visible => false,
      :position => 1,
      :picture => ""
    ))
  end

  it "renders the edit collection form" do
    render

    assert_select "form[action=?][method=?]", collection_path(@collection), "post" do

      assert_select "input#collection_name[name=?]", "collection[name]"

      assert_select "input#collection_visible[name=?]", "collection[visible]"

      assert_select "input#collection_position[name=?]", "collection[position]"

      assert_select "input#collection_picture[name=?]", "collection[picture]"
    end
  end
end
