Rails.application.routes.draw do

  devise_for :users
  root to: 'home#index'
  resources :categories, only: [:show]
  resources :services, only: [:show, :index, :edit, :destroy] do
    resources :reviews, only: [:create, :index]
  end
  resources :messages, only: [:index]
  resources :reviews, only: [:destroy]
  resources :users, only: [:new, :create]
  resources :messages, only: [:create, :show, :destroy]

  post '/services/new' => 'services#new'
end
