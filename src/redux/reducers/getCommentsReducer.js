import { GET_COMMENTS } from "../actions/getCommentsAction";

const initialState = {
  content: [],
};

const getCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default getCommentsReducer;
