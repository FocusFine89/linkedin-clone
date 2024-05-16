import { GET_POST } from "../actions/getPost";

const initialState = {
  content: [],
};

const getPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default getPostReducer;
