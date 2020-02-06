import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../Constants";

const initialState = {
  isLoading: false,
  data: [],
  hasError: false
};

const tableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: payload, isLoading: false };
    case FETCH_DATA_FAILURE:
      return { ...initialState, hasError: true };
    default:
      return state;
  }
};

export default tableReducer;
