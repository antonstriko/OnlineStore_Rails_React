class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :isStoreManager #, :address_street, :address_city, :address_state, :address_zip
end
