import axios from "axios";

// Client

export const getClient = () => {
  return async (dispatch) => {
    let getClient = await axios.get("http://localhost:8080/api/v1/clientes");
    dispatch({
      type: "GET_CLIENT",
      payload: getClient,
    });
  };
};

// Articles

export const getArticles = () => {
  return async (dispatch) => {
    let getArticles = await axios.get(
      "http://localhost:8080/api/v1/articulos/manufacturados"
    );
    dispatch({
      type: "GET_ARTICLE",
      payload: getArticles,
    });
  };
};
export const getArticlesId = (id) => {
  return async (dispatch) => {
    let getArticlesId = await axios.get(
      `http://localhost:8080/api/v1/articulos/manufacturados/${id}`
    );
    dispatch({
      type: "GET_ARTICLE_ID",
      payload: getArticlesId,
    });
  };
};
