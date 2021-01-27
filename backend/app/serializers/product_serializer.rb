class ProductSerializer < ActiveModel::Serializer
  attributes :id, :price, :brand, :product_id, :department, :title, :image_url, :rating, :num_reviews, :in_stock, :stock

  def num_reviews
    object.reviews_count
  end

  def rating
    object.avg_rating
  end

  def favorites_count
    object.favorites_count
  end
end
