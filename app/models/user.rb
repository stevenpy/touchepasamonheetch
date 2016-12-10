class User < ApplicationRecord
	validates :country, presence: true
end
