Rails.application.routes.draw do

  root 'home#index'
  post 'home/send_email', to: 'home#send_email', as: :send_email

  devise_for :admins
  get 'admin', to: 'admin_section#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
