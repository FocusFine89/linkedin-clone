export const GET_USER = "GET_USER";

export const getUserAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
          },
        }
      );
      if (response.ok) {
        let user = await response.json();
        dispatch({ type: GET_USER, payload: user });
      } else {
        throw new Error("Error in fetching user");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
