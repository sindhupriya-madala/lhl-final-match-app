class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_user_id"
  has_many :received_messages, class_name: "Message", foreign_key: "receiver_user_id"

  mount_uploader :profile_pic, UserImageUploader

    # User profile_pic Validation
  validates_integrity_of  :profile_pic
  validates_processing_of :profile_pic
 
  private
    def profile_pic_size_validation
      errors[:profile_pic] << "should be less than 500KB" if profile_pic.size > 0.1.megabytes
    end
end
