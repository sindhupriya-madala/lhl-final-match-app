Rails.application.routes.draw do
  root to: 'home#index'

  resources :users, only: [:new, :create]
  # resources :sessions, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  resources :services, only: [:new, :show, :index]

  resources :reviews, only: [:create, :index, :destroy]

end
