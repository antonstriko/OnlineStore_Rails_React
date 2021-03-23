class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :isStoreManager, :favorites_count, :fav_ids, :reviews_count, :reviews
  
  def fav_ids 
    fav_ids = object.favorites.map do |fav|
      fav.product_id
    end 
    fav_ids
  end 

  def reviews 
    reviews = object.reviews.map do |rev|
      { product_id: rev.product_id,
        title: rev.product_title,
        rating: rev.rating }
    end
    reviews
  end

  def favorites_count
    object.favorites_count
  end

  def reviews_count
    object.reviews_count
  end
end
