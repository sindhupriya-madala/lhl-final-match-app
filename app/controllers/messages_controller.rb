class MessagesController < ApplicationController
    def show
        
        @messages = Message.includes(:user)        
        p @messages
        # @unreadMessages = unreadMessages        
    end

    def create

    end

    def destroy

    end
end
