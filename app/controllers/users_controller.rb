class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(permitted_params.merge(session_id: session.id))
    if @user.save
      redirect_to @user
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  private

  def permitted_params
    params.require(:user).permit(:country, :candy_fan, :polish_candy_fan, :night_club_fan, :fan_type, :pierrogi_fan)
  end
end