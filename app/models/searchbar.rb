class Searchbar < ApplicationRecord
  # has_many :services

  def self.search(search)
    where(" (category_name) LIKE ? OR (service_description) LIKE ?", "%#{search}%", "%#{search}%")
  end
end
