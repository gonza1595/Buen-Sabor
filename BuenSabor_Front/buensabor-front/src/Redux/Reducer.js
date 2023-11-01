const initialState = {
  clients: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CLIENT":
      return {
        ...state,
        clients: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
