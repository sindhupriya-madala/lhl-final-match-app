class User < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_user_id"
  has_many :received_messages, class_name: "Message", foreign_key: "receiver_user_id"
  has_many :messages, class_name: "Message", foreign_key: "receiver_user_id"
  
  # User Avatar Validation
  validates_integrity_of :avatar
  validates_processing_of :avatar

  private
    def avatar_size_validation
      error[:avatar] << "should be less than 500KB" if avatar.size > 0.5.megabytes
    end

  def self.isUser(service_user_id, current_user_id)
    return (service_user_id === current_user_id)
  end
  
end
