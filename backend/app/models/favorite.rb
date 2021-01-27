class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :product

  def product_imageUrl
    self.product.image_url
  end
  def product_title
    self.product.title
  end
end
