class ContactMailer < ApplicationMailer
  def send_email(options={})
    @name = options[:name]
    @email = options[:email]
    @message = options[:message]
    mail(to: 'camilleskubich@gmail.com', cc: "channebertrand@gmail.com", subject: "SkubichJewelry Website")
  end
end
