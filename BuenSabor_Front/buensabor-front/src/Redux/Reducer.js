const initialState = {
  client: [],
  article: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CLIENT":
      return {
        ...state,
        client: action.payload,
      };
    case "GET_ARTICLE":
      return {
        ...state,
        article: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
