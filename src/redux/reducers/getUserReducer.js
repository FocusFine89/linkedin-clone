import { GET_USER } from "../actions/getUserAction";

const initialState = {
  content: null,
};

const getUSerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getUSerReducer;
