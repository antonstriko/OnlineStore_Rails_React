class Api::V1::FavoritesController < ApplicationController
    skip_before_action :authorized, only: [:create, :destroy]
  def index
      @favorites = Favorite.all
      render json: @favorites, except: [:created_at, :updated_at]
  end

  def show
      @favorite = Favorite.find(params[:id])
      if @favorite
          render json: @favorite, except: [:created_at, :updated_at]
      else
          render json: { message: 'favorite not found' }
      end
  end

  def create
      @favorite = Favorite.new(favorite_params)
      @favorite.save
      render json: @favorite, except: [:created_at, :updated_at]
  end

  def destroy
    @favorite = Favorite.find_by(user_id: favorite_params[:user_id], product_id: favorite_params[:product_id])
    @favorite.destroy
  end

  private

  def favorite_params
      params.require(:favorite).permit(:user_id, :product_id)
  end
end
