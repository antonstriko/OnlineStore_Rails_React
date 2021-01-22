class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_items, :user, :name, :total, :item_count, :isShipped, :shipped_date, :paid, :payment, :address_street, :address_city, :address_state, :address_zip
end
