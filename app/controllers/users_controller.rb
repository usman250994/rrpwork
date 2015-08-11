class UsersController < ApplicationController
  before_action :logged_in_user, only: [:index, :edit, :update, :destroy]
  
  def index
    #@users = User.find_by(role: 'student').paginate(page: params[:page])
    #@users = @user
    #@users = User.where(role: 'student')
    @users = User.paginate(page: params[:page])
    
  end
  
  def new
    if current_user.admin? || current_user.pm?
      @user = User.new
    else
      redirect_to current_user
    end
  end
  
  def show
    
     @user = User.find(params[:id])
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      #log_in @user
      flash[:success] = "New Records has been added!"
      redirect_to students_path
    else
      render 'new' 
    end
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:success] = "Profile updated"
      redirect_to @user
    else
      render 'edit'
    end
  end
  
  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User deleted"
    redirect_to users_url
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
  
  # Confirms a logged-in user.
  def logged_in_user
    unless logged_in?
      flash[:danger] = "Please log in."
      redirect_to login_url
    end
  end
  
end
