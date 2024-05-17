import { GET_POST } from "../actions/getPost";

const initialState = {
  content: [],
  loading: true,
};

const getPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default getPostReducer;
