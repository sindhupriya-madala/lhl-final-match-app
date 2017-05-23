Rails.application.routes.draw do

  devise_for :users
  
  root to: 'home#index'
  resources :categories, only: [:show]
  resources :services do
    resources :reviews, only: [:create]
  end
  resources :reviews, only: [:destroy]
end
