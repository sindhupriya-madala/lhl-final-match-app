class User < ApplicationRecord
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_user_id"
  has_many :received_messages, class_name: "Message", foreign_key: "receiver_user_id"
end
