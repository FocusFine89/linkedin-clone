import {
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from '../actions/deleteCommentAction'

const initialState = {
  error: null,
}

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        error: null,
      }
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
