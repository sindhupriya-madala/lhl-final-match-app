Rails.application.routes.draw do

  root to: 'home#index'

  resources :categories, only: [:show]
  
  resources :services do
    resources :reviews, only: [:create]
  end
  resources :reviews, only: [:destroy]

end
