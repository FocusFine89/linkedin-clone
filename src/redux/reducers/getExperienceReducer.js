import {
  DELETE_EXPERIENCE,
  GET_EXPERIENCE,
  GET_SPECIFIC_EXPERIENCE,
} from "../actions/getExperienceAction";

const initialState = {
  content: [],
  specificExperience: null,
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

    case GET_SPECIFIC_EXPERIENCE:
      return {
        ...state,
        specificExperience: action.payload,
      };
    default:
      return state;
  }
};

export default getExperienceReducer;
