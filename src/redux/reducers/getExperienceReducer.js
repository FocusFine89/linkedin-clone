import {
  DELETE_EXPERIENCE,
  GET_EXPERIENCE,
} from "../actions/getExperienceAction";

const initialState = {
  content: [],
};

const getExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getExperienceReducer;
