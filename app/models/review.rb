class Review < ApplicationRecord
  belongs_to :user
  belongs_to :service

  def getUserByReview(id)
    return User.find(id)
  end
end
