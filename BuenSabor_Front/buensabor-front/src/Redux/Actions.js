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
