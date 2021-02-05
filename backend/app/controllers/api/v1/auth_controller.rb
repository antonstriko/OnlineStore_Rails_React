class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
  attr_reader :headers

  def create
    @user = User.find_by(email: auth_params[:email])
    #User#authenticate comes from BCrypt
    if @user && @user.authenticate(auth_params[:password])
      # encode token comes from ApplicationController
      payload = {user_id: @user.id}
      @token = JWT.encode(payload, 'my_s3cr3t')
      render json: {user: @user, token: @token}
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def profile
    auth_h = request.headers[:Authorization]
    token = auth_h.split(' ')[1]
    de_token = JWT.decode(token, 'my_s3cr3t')
    user_id = de_token[0]['user_id']
    @user = User.find_by(id: user_id)

    if @user
      render json: @user
    else
      render json: { message: 'Invalid username or password' }
    end    
  end

  private

  def auth_params
    # params { user: {email: 'example@gmail.com', password: 'hi' } }
    params.require(:user).permit(:email, :password)
  end
end

# class Api::V1::AuthController < ApplicationController
#   skip_before_action :authorized, only: [:create]
   
#   #login method
#     def create
#       @user = User.find_by(username: user_login_params[:username])
#       #user.authenticate comes from bcrypt
#       if @user && @user.authenticate(user_login_params[:password])
#         # encode token comes from application controller
#         token = encode_token({ user_id: @user.id })
#         render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
#       else
#         render json: { error: 'Incorrect username or password' }, status: :unauthorized
#       end
#     end
   
#     private
   
#     def user_login_params
#       params.require(:user).permit(:username, :password)
#     end
#   end