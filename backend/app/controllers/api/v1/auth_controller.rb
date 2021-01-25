require 'jwt'
class Api::V1::AuthController < ApplicationController
  # skip_before_action :logged_in?, only: [:create, :profile]

  def create
    @user = User.find_by(email: user_login_params[:email])
    #User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_login_params[:password])
      # encode token comes from ApplicationController
      payload = {user_id: @user.id}
      @token = JWT.encode(payload, 'my_s3cr3t')
      render json: {user: @user, token: @token}
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def profile
    ah = request.headers['Authorization']
    if ah
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      JWT.decode(token, 'my_s3cr3t', true, 'HS256') #, true, algorithm: 'HS256')
      user_id = decoded_token ? decoded_token[0]['user_id'] : nil
      @user = User.find_by(id: user_id)
      render json: @user #, except: [:created_at, :updated_at], include: [:favorites, :orders, :reviews]
    else
      render json: { message: 'Invalid username or password' }
    end    
  end
  
  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      JWT.decode(token, 'my_s3cr3t', true, 'HS256') #, true, algorithm: 'HS256')
    end
  end

  def current_user
      user_id = decoded_token ? decoded_token[0]['user_id'] : nil
      @user = User.find_by(id: user_id)
      @user
  end

  private

  def user_login_params
    # params { user: {email: 'example@gmail.com', password: 'hi' } }
    params.require(:user).permit(:email, :password)
  end
end

# class AuthorizeApiRequest
#   prepend SimpleCommand

#   def initialize(headers = {})
#     @headers = headers
#   end

#   def call
#     user
#   end

#   private

#   attr_reader :headers

#   def user
#     @user ||= User.find(decoded_token[:user_id]) if decoded_token
#     @user || errors.add(:token, 'Invalid token') && nil
#   end

#   def decoded_token
#     @decoded_token ||= JWT.decode(http_auth_header)
#   end

#   def http_auth_header
#     if headers['Authorization'].present?
#       return headers['Authorization'].split(' ').last
#     else
#       errors.add :token, 'Missing token'
#     end
#     nil
#   end
# end