class User < ActiveRecord::Base
    enum role: [:student, :lc, :pm, :admin]
    after_initialize :set_default_role, :if => :new_record?
    before_save { self.email = email.downcase }
    validates :name,  presence: true, length: { maximum: 50 }
    
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
    has_secure_password
    validates :password, presence: true, length: { minimum: 6 }
    
    
    def set_default_role
        self.role ||= :student
    end
end
