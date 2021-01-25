class Api::V1::FavoritesController < ApplicationController
  def index
      @favorites = Favorite.all
      render json: @favorites, except: [:updated_at]
  end

  def show
      @favorite = Favorite.find_by(id: params[:id])
      if user
          render json: @favorite, except: [:updated_at]
      else
          render json: { message: 'Item not found' }
      end
  end

  def create
      @favorite = Favorite.new(favorite_params)
      @favorite.save
      render json: @favorite
  end

  def update
      @favorite = Favorite.find_by(params[:id])
      @favorite.update_attributes(favorite_params)
      render json: @favorite
  end

  def destroy
      Favorite.destroy(params[:id])
  end

  private

  def favorite_params
      params.require(:favorite).permit(:user_id, :product_id)
  end
end
