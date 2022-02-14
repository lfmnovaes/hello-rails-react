class Api::GreetingsController < ApplicationController
  def index
    render json: { :greetings => [
      {
        :name => 'Hi',
        :guid => '1234-5-6789'
      }
    ]}.to_json
  end
end