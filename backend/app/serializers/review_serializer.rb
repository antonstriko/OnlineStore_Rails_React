class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :rating

  belongs_to :product
  belongs_to :user
end
