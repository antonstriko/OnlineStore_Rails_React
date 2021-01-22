class Api::V1::UsersController < ApplicationController
    # skip_before_action :logged_in?, only: [:create]

    def create
      @user = User.create(user_params)
      if @user.valid?
        @token = JWT.encode({user_id: @user.id}, 'my_s3cr3t')
        render json: { user: @user, auth_token: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end
  
    def show
      @user = User.find(params[:id])
      render json: @user, except: [:created_at, :updated_at], include: [:orders, :reviews]
    end
    
    # PATCH/PUT /users/1
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @user.destroy(params[:id])
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end
  
      def user_params
        params.require(:user).permit(:email, :password, :firstname, :lastname, :isStoreManager)
      end
end
