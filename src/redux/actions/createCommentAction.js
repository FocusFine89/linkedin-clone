export const CreateCommentAction = (expObj) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(expObj),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQ3MjAzZDBmZjU1ZTAwMTU2NjI1YzgiLCJpYXQiOjE3MTU5MzczNDEsImV4cCI6MTcxNzE0Njk0MX0.4TywCcAcEXAWNT1vWz5Iji_84EselyY8cmf9KMLEYpo",
          },
        }
      );
      if (response.ok) {
        console.log(response);
      } else {
        console.log(expObj);
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
