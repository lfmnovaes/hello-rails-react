class Api::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        id: '2',
        message: 'asdasd'
      }
    ] }.to_json
  end
end
