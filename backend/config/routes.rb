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
      resources :favorites

      # resources :auth, only: %i[create] do
      #   collection do
      #     post 'password/forgot', to: 'auth#forgot_password'
      #     post 'password/reset', to: 'auth#reset_password'
      #     get 'me', to: 'auth#logged_in'
      #     delete 'logout', to: 'auth#logout'
      #   end
      # end

    end
  end
end
# token = JWT.encode({user_id: id}, 'my_s3cr3t')
# header = {'Authorize': "Bearer #{token}"}
# split_token = header[:Authorize].split(' ')[1]
# decoded_token = JWT.decode(split_token, 'my_s3cr3t')
# user_id = decoded_token[0]['user_id']
# user_id