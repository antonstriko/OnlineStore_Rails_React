Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create,:show]
      post '/login', to: 'auth#create'
      # get '/profile', to: 'users#profile'
      resources :order_items
      resources :orders
      resources :reviews
      resources :products
    end
  end
end
