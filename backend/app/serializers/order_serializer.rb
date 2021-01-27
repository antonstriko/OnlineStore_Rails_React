class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :item_count, :isShipped, :paid, :payment, :address_street, :address_city, :address_state, :address_zip, :date, :order_items

  def order_items 
    self.object.order_items.map do |order_item|
      {title: order_item.title,
      product_id: order_item.product_id,
      qty: order_item.qty,
      price: order_item.price,
      subtotal: order_item.subtotal}
    end 
  end 
    
end
