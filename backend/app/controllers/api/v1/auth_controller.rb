class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(email: user_login_params[:email])
    #User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_login_params[:password])
      # encode token comes from ApplicationController
      @token = JWT.encode({user_id: @user.id}, 'my_s3cr3t')
      render json: {user: @user, token: @token}, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  private

  def user_login_params
    # params { user: {email: 'example@gmail.com', password: 'hi' } }
    params.require(:user).permit(:email, :password)
  end
end
