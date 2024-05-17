export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

export function deleteCommentSuccess(commentId) {
  return { type: DELETE_COMMENT_SUCCESS, commentId }
}

export function deleteCommentFailure(error) {
  return { type: DELETE_COMMENT_FAILURE, error }
}

export function deleteComment(commentId) {
  return async dispatch => {
    try {
      await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQ3MjAzZDBmZjU1ZTAwMTU2NjI1YzgiLCJpYXQiOjE3MTU5MzczNDEsImV4cCI6MTcxNzE0Njk0MX0.4TywCcAcEXAWNT1vWz5Iji_84EselyY8cmf9KMLEYpo`,
            'Content-Type': 'application/json',
          },
        }
      )

      dispatch(deleteCommentSuccess(commentId))
    } catch (error) {
      dispatch(deleteCommentFailure(error.message))
    }
  }
}
