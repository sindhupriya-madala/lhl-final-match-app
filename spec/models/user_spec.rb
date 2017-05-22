require 'rails_helper'

RSpec.describe User, type: :model do
  has_many :reviews
end
