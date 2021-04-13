class User < ApplicationRecord
  has_secure_password
  
  has_many :orders
  has_many :reviews
  has_many :favorites
  has_many :products, through: :favorites
  
  validates :email, uniqueness: { case_sensitive: true}
  validates :email, :firstname, :lastname, :password, presence: true

  def favorites_count
    self.favorites.count
  end

  def reviews_count
    self.reviews.count
  end

end