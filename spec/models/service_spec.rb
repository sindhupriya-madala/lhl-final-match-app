require 'rails_helper'

RSpec.describe Service, type: :model do
  belongs_to :category
  has_many :reviews
end
