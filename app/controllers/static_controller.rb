class StaticController < ApplicationController
  def index
    @greeting = random_greeting
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @greeting }
    end
  end

  private

  def random_greeting
    number = rand(Greeting.count)
    Greeting.all[number]
  end
end
