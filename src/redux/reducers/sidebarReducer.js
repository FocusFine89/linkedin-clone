import { LIST_OF_PROFILE } from "../actions";

const initialState = {
  content: [],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_OF_PROFILE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
