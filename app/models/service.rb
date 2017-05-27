class Service < ApplicationRecord
  belongs_to :user
  belongs_to :category

  def getUserByService(id)
    return User.find(id)
  end
  
end
