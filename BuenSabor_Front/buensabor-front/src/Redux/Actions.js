import axios from "axios";

export const getClient = () => {
  return async (dispatch) => {
    let getClient = await axios.get("http://localhost:8080/api/v1/clientes");
    dispatch({
      type: "GET_CLIENT",
      payload: getClient,
    });
  };
};
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
