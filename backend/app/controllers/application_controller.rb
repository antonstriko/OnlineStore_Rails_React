class ApplicationController < ActionController::API
  before_action :authorized
  
      def encode_token(payload)
          JWT.encode(payload, 'my_s3cr3t')
      end
  
      # #This method looks at HTTP request for key of 'Authorization' with 
      # #format of Bearer <token>. This method returns a token.
      def auth_header
          # { 'Authorization': 'Bearer <token>' }
          request.headers['Authorization']
      end 
  
      # #This method returns an array from JWT.decode. We only care about
      # #the first index: key of user_id, which is used in current_user method
      def decoded_token
          if auth_header
              token = auth_header.split(' ')[1]
              begin
                  JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
              rescue JWT::DecodeError
                  nil
              end
          end
      end
  
      # #This method checks if a User instance with that ID
      # #exists in the database. If so, it's authorized.
      # #This is the previously logged in user.
      def current_user
          if decoded_token
              user_id = decoded_token[0]['user_id']
              @user = User.find_by(id: user_id)
          end
      end
  
      def logged_in?
          !!current_user
      end
  
      def authorized
          render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
      end
  
  end
# class ApplicationController < ActionController::API
#   # before_action :logged_in?

#   def encode_token(payload)
#     # should store secret in env variable
#     JWT.encode(payload, 'my_s3cr3t')
#     # JWT.encode(payload, ENV["SECRET_KEY_BASE"])
#   end

#   def auth_header
#     # { Authorization: 'Bearer <token>' }
#     request.headers['Authorization']
#   end

#   def decoded_token
#     if auth_header
#       token = auth_header.split(' ')[1]
#       # header: { 'Authorization': 'Bearer <token>' }
#       JWT.decode(token, 'my_s3cr3t', true, { algorithm: 'HS256' }) #, true, algorithm: 'HS256')
#     end
#   end

#   def current_user
#       user_id = decoded_token && decoded_token[0] ? decoded_token[0]['user_id'] : nil
#       @user = user_id ? User.find_by(id: user_id) : nil
#       byebug
#       @user
#   end

#   def logged_in?
#     !!current_user
#   end

#   def authorized
#     render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
#   end
# end
