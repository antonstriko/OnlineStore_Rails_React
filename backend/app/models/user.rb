class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: { case_sensitive: false}

    has_many :orders
    has_many :reviews
    
  # attr_accessor :password

  # def authenticate(plaintext_password)
  #   if BCrypt::Password.new(self.password_digest) == plaintext_password
  #     self
  #   else
  #     false
  #   end
  # end
end
