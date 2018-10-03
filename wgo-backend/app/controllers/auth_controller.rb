class AuthController < ApplicationController
  skip_before_action :authenticate, only: [:login]

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = generate_token(user)
      render json: { token: token, user: { username: user.username, fullname: user.fullname, about: user.about, id: user.id, email: user.email, picture: user.picture}}, status: 200
    end
  end
end
