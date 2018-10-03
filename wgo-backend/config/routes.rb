Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :create]
  resources :events, only: [:index, :create, :update, :destroy]
  resources :likes, only: [:index, :create, :destroy]
  resources :comments, only: [:index, :create, :destroy]

  post '/login', to: 'auth#login'
  get '/account', to: 'users#show'
  patch '/user-update', to: 'users#update'
  get '/active-users', to: 'users#active'
end
