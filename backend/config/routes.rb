Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      post '/login', to: 'auth#create'
      get '/profile', to: 'auth#profile'
      resources :order_items
      resources :orders
      resources :reviews
      resources :products
    end
  end
end
