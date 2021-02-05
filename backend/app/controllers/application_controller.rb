class ApplicationController < ActionController::API
  # before_action :logged_in?

  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'my_s3cr3t')
    # JWT.encode(payload, ENV["SECRET_KEY_BASE"])
  end

  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      JWT.decode(token, 'my_s3cr3t', true, { algorithm: 'HS256' }) #, true, algorithm: 'HS256')
    end
  end

  def current_user
      user_id = decoded_token && decoded_token[0] ? decoded_token[0]['user_id'] : nil
      @user = user_id ? User.find_by(id: user_id) : nil
      byebug
      @user
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
