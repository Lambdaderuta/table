import Api from "../Api";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../Constants";

function request() {
  return { type: FETCH_DATA_REQUEST };
}

function success(data) {
  return { type: FETCH_DATA_SUCCESS, payload: data };
}

function failure(error) {
  return { type: FETCH_DATA_FAILURE, payload: error };
}

function doRequest() {
  return async function(dispatch) {
    try {
      dispatch(request());
      const { data, error } = await Api.doRequest();
      debugger;
      if ({ data }) {
        return dispatch(success(data));
      } else {
        dispatch(failure(error));
      }
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
export default doRequest;
