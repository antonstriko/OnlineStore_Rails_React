class Api::V1::OrdersController < ApplicationController
  def index
    orders = Order.all
    render json: orders, except: [:updated_at], include: [:products, :user]
end

def show
    order = Order.find_by(id: params[:id])
    if order
        render json: order, include: [:products]
    else
        render json: { message: 'Item not found' }
    end
end

def create
    order = Order.new(order_params)
    order.save
    render json: order, except: [:created_at, :updated_at]
end

# def update
#     order = Order.find(params[:id])
#     order.update_attributes(order_params)
#     render json: order
# end
def update
    @order = Order.find(params[:id])
    # @order.update_attributes(order_params)
    @order.update(order_params)
    @order.save()
    if @order
        render json: @order, include: [:order_items]
    else
        render json: { message: 'Order not found/updated' }
    end
end

private

def order_params
    params.require(:order).permit(:user_id, :name, :order_date, :total, :item_count, :isShipped, :shipped_date, :paid, :payment, :address_street, :address_city, :address_state, :address_zip)
end
end
