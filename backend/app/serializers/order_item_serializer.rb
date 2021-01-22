class OrderItemSerializer < ActiveModel::Serializer
  attributes :id :order_id, :product_id, :product, :qty, :price, :subtotal
end
