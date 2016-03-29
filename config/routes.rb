Rails.application.routes.draw do

  # Static_pages
  root 'static_pages#home'

  get 'create' => 'create#index'

end
