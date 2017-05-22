require 'rails_helper'

RSpec.describe Review, type: :model do
  belongs_to :user
  belongs_to :service
end
