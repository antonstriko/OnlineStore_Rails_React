class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :content, :rating
end