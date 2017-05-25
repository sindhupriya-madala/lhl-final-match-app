class Message < ApplicationRecord
    belongs_to :sender_user, class_name: "User", foreign_key: "sender_user_id"
    belongs_to :receiver_user, class_name: "User", foreign_key: "receiver_user_id"
    belongs_to :user, class_name: "User", foreign_key: "receiver_user_id"

def unreadMessages
    unreadMessages = Message.all
end

end
