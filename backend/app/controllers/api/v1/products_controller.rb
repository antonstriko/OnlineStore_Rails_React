class Api::V1::ProductsController < ApplicationController
    # skip_before_action :logged_in?, only: [:index, :show]

    def index
        @products = Product.all
        #render json: { product: ProductSerializer.new(@products)}
        render json: @products, except: [:created_at, :updated_at] #, include: [:reviews]
    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product
            render json: {product: ProductSerializer.new(@product)}
            # render json: @product, except: [:created_at, :updated_at], include: [:reviews]
        else
            render json: { message: 'Item not found' }
        end
        
    end

    def create
        @product = Product.new(product_params)
        @product.save
        render json: @product, except: [:created_at, :updated_at]
    end

    def update
        product = Product.find(params[:id])
        product.update_attributes(product_params)
        render json: product
    end

    private

    def product_params
        params.require(:product).permit(:id, :brand, :product_id, :department, :title, :description, :image_url, :rating, :num_reviews, :in_stock, :stock, :price)
    end
end
