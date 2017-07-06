require 'rails_helper'

RSpec.describe "collections/index", type: :view do
  before(:each) do
    assign(:collections, [
      Collection.create!(
        :name => "Name",
        :visible => false,
        :position => 2,
        :picture => ""
      ),
      Collection.create!(
        :name => "Name",
        :visible => false,
        :position => 2,
        :picture => ""
      )
    ])
  end

  it "renders a list of collections" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
  end
end
