class HomeController < ApplicationController
  def index
  end

  def send_email
    message_params = { name: params[:name], email: params[:email], message: params[:message] }
    @message = Message.new(message_params)
    if @message.valid?
      ContactMailer.send_email(message_params).deliver
      redirect_to root_url, notice: "Email sent!"
    else
      puts 'yoyoyoyoyoyoyoy'
      redirect_to root_url, notice: "Email NOT sent!"
    end
  end



end
