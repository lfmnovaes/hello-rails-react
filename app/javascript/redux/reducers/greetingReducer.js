const GET_GREETINGS = 'greetings/GET';

const initialState = [];

const tempDB = [
  {
    id: '1',
    message: 'Hello world'
  }
];

export const getGreetings = () => async (dispatch) => {
  dispatch({
    type: GET_GREETINGS,
    payload: tempDB,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
