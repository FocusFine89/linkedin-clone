export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const CREATE_EXPERIENCE = "CREATE_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const MODIFIE_EXPERIENCE = "MODIFIE_EXPERIENCE";
export const GET_SPECIFIC_EXPERIENCE = "GET_SPECIFIC_EXPERIENCE";

export const getExperienceAction = (id_user) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences`,
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
        let experiences = await response.json();
        dispatch({ type: GET_EXPERIENCE, payload: experiences });
      } else {
        throw new Error("Error in fetching user");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const CreateExperienceAction = (id_user, expObj) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(expObj),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
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

export const deleteExperienceAction = (id_user, expId) => {
  fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences/${expId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
      },
    }
  ).then((response) => {
    if (response.ok) {
      alert("L'esperienza è stata cancellata");
    }
  });
};

export const ModifieSpecificExperienceAction = (id_user, expId, expObj) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences/${expId}`,
        {
          method: "PUT",
          body: JSON.stringify(expObj),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
          },
        }
      );
    } catch (err) {
      console.log("error", err);
    }
  };
};
