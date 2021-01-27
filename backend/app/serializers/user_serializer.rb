class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :isStoreManager

  has_many :orders
  has_many :favorites
  has_many :reviews
end
