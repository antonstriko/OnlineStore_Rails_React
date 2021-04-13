class Api::V1::OrdersController < ApplicationController

    def index
        @orders = Order.where(user_id: current_user[:id])
        render json: @orders, except: [:created_at, :updated_at], include:[:order_items, :user]
    end

    def show
        @order = Order.find(params[:id])
        if @order
            render json: @order, except: [:created_at, :updated_at], include:[:order_items, :user]
        else
            render json: { message: 'Order not found' }
        end
    end

    def create
        @order = Order.new(order_params)
        @order.save
        render json: @order, except: [:created_at, :updated_at], include:[:order_items, :user]
    end

    def update
        @order = Order.find(params[:id])
        if @order
            @order.update_attributes(order_params)
            render json: @order, include:[:order_items, :user]
        else
            render json: { message: 'Order not found/updated' }
        end
    end

    private

    def order_params
        params.require(:order).permit(
            :user_id,
            :total, :item_count, :paid, :payment, 
            :isShipped, :shipped_date, :address_street, :address_city, :address_state, :address_zip,
            order_items_attributes: [:id, :product_id, :title, :qty, :price, :subtotal, :title]
        )
    end
end
