class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :isStoreManager, :favorites_count, :favorites, :reviews_count, :reviews

  def favorites 
    object.favorites.map do |fav|
      { product_id: fav.id}
    end 
  end 

  def reviews 
    self.object.reviews.map do |rev|
      { product_id: rev.product_id,
        title: rev.product_title,
        rating: rev.rating }
    end 
  end

  def favorites_count
    object.favorites_count
  end

  def reviews_count
    self.object.reviews_count
  end
end
