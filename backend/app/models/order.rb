class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  has_many :products, through: :order_items

  accepts_nested_attributes_for :order_items

  validates :user_id, :order_items, :total, presence: true

end
