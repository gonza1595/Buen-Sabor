const initialState = {
  client: [],
  article: [],
  articleDetail: [],
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
    case "GET_ARTICLE_ID":
      return {
        ...state,
        articleDetail: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
