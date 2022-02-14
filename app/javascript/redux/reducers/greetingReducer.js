const GET_GREETINGS = 'greetings/GET';

const initialState = {
  greetings: [
    {
      id: "1",
      name: "Hello World"
    }
  ]
};

export const getGreetings = () => async (dispatch) => {
  dispatch({
    type: GET_GREETINGS,
    payload: 'greetings test'
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
