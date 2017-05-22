require 'rails_helper'

RSpec.describe Message, type: :model do
  belongs_to :user
end
