class ProductSerializer < ActiveModel::Serializer
  attributes :id, :price, :brand, :product_id, :department, :title, :description, :image_url, :rating, :num_reviews, :in_stock, :stock
end
