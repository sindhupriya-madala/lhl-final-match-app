Rails.application.routes.draw do

  devise_for :users
  root to: 'home#index'
  resources :categories, only: [:show]
  resources :services, only: [:show, :create, :index, :edit, :destroy] do
    resources :reviews, only: [:create, :index]
  end
  resources :messages, only: [:index, :create, :destroy]
  resources :reviews, only: [:destroy]
  resources :users, only: [:new, :create]
  resources :searchbar, only: [:index]
  post '/services/new' => 'services#new'
end
