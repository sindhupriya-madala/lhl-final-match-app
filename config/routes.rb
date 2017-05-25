Rails.application.routes.draw do

 devise_for :users
  
  root to: 'home#index'
  resources :categories, only: [:show]
  resources :services, only: [:new, :show, :index] do
    resources :reviews, only: [:create, :index]
  end
  resources :reviews, only: [:destroy]
  resources :users, only: [:new, :create]
  resources :messages, only: [:create, :show, :destroy]
end
