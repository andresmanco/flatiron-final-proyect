class UsersController < ApplicationController
  skip_before_action :authenticate, only: [:index, :create, :active]

  def index
    render json: User.all
  end

  def active
    active = User.all.select{ |user| user.location != 'offline'}
    render json: active
  end

  def show
    render json: {username: my_current_user.username, fullname: my_current_user.fullname, about: my_current_user.about ,id: my_current_user.id, email: my_current_user.email, picture: my_current_user.picture}
  end

  def create
    render json: User.create(user_params)
  end

  def update
    my_current_user.update(location: params[:location])
    render json: my_current_user
  end

  # def destroy
  #   render json: User.find(params[:id]).destroy
  # end

  private

  def user_params
    params.permit(:fullname, :username, :email, :picture, :password, :location)
  end
end
