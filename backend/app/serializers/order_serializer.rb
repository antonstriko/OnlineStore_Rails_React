class OrderSerializer < ActiveModel::Serializer
  attributes :id, :date, :total, :item_count, :isShipped, :paid, :payment, :address_street, :address_city, :address_state, :address_zip, :order_items, :user

  def order_items 
    self.object.order_items.map do |order_item|
      {id: order_item.id,
      title: order_item.title,
      product_id: order_item.product_id,
      qty: order_item.qty,
      price: order_item.price,
      subtotal: order_item.subtotal}
    end 
  end
  def user 
    {name: "#{self.object.user.firstname} #{self.object.user.lastname}", email: self.object.user.email} 
  end 
    
end
