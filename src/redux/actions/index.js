export const LIST_OF_PROFILE = "LIST_OF_PROFILE";

export const getListOfProfileAction = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMTE5MjU1NjIxYTAwMTVjMTVmYzciLCJpYXQiOjE3MTU2NzE0NDIsImV4cCI6MTcxNjg4MTA0Mn0.FUQyK6XljsFzJN--i9F-yuIWuF0ltzKdKLOLmyRZddA",
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
          type: LIST_OF_PROFILE,
          payload: data.slice(0, 8),
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
