class Message < ApplicationRecord
    belongs_to :user

    def self.getMessages
        self.all.map do |message| 
            {
                id: message.id,
                user: message.user.username,
                content: message.content
            } 
        end
    end
end
