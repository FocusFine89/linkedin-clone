import { CREATE_EXPERIENCE } from "../actions/getExperienceAction";

const initialState = {
  content: null,
};

const createExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default createExperienceReducer;
