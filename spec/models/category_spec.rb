require 'rails_helper'

RSpec.describe Category, type: :model do
  has_many :services
end
