class UsersController < ApplicationController
	def new
		@user = User.new
  end

  def create
  	@user = User.new(permitted_params.merge(session_id: session.id))
		if @user.save
      flash[:notice] = "Thank you for using Heetch!"
    	redirect_to root_path
    else
      flash[:notice] = "Failed to save."
    	redirect_to root_path
    end
  end

  private

  def permitted_params
  	params.require(:user).permit(:country, :candy_fan, :night_club_fan, :fan_type)
  end
end