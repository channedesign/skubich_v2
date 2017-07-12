class HomeController < ApplicationController
  def index
    @collections = Collection.where(visible: true).order(:position)
  end

  def send_email
    message_params = { name: params[:name], email: params[:email], message: params[:message] }
    @message = Message.new(message_params)
    respond_to do |format|
      if @message.valid?
        ContactMailer.send_email(message_params).deliver
        format.html { redirect_to root_url, notice: "Your message was sent successfully!" }
        format.js
      else
        # puts 'YOYOYOYOYOYOYOYOYOOYOY'
        # @message.errors.full_messages.each {  |e| puts e}
        format.js
      end
    end
  end



end
