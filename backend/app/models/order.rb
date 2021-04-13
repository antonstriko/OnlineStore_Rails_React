class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  has_many :products, through: :order_items

  accepts_nested_attributes_for :order_items

  validates :order_items, presence: true
  validates :user_id, presence: true
end
