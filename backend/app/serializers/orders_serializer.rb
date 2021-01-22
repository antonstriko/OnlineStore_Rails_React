class OrdersSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user, :name, :total, :item_count, :isShipped, :shipped_date, :paid, :payment, :address_street, :address_city, :address_state, :address_zip, :order_items
end
