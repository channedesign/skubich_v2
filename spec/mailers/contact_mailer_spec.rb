require "rails_helper"

RSpec.describe ContactMailer, type: :mailer do
  describe 'send_email' do
    let(:sender) { build :user }
    let(:mail) { described_class.send_email(name: sender.name, email: sender.email, message: sender.message).deliver_now }

    it 'renders the subject' do
      expect(mail.subject).to eq('SkubichJewelry Website')
    end

    it 'renders the receiver' do
      expect(mail.to).to eq(['camilleskubich@gmail.com'])
    end

    it 'renders the sender' do
      expect(mail.from).to eq(['camilleskubich@gmail.com'])
    end

    it 'assigns @name' do
      expect(mail.body).to match(sender.name)
    end

    it 'assigns @email' do
      expect(mail.body).to match(sender.email)
    end

    it 'assigns @message' do
      expect(mail.body).to match(sender.message)
    end

  end
end
