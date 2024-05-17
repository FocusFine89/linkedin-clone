export const GET_COMMENTS = "GET_COMMENTS";

export const getCommentsAction = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQ3MjAzZDBmZjU1ZTAwMTU2NjI1YzgiLCJpYXQiOjE3MTU5MzczNDEsImV4cCI6MTcxNzE0Njk0MX0.4TywCcAcEXAWNT1vWz5Iji_84EselyY8cmf9KMLEYpo",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        dispatch({
          type: GET_COMMENTS,
          payload: data.slice(0, 10),
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
