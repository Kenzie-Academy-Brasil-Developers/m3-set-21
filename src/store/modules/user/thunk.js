import { signIn, updateUser } from "./actions";
import axios from "axios";

export const signInThunk = (data, history) => {
  return (dispatch) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        dispatch(signIn(response.data));

        localStorage.setItem(
          "@user:Kenziehub",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem("@token:Kenziehub", response.data.token);

        history.push("/user");
      });
  };
};

export const updateUserInfoThunk = (
  data,
  token,
  successMessageUpdate,
  notSuccessMessageUpdate
) => {
  return (dispatch) => {
    axios
      .put("https://kenziehub.herokuapp.com/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        successMessageUpdate("success");
        {
          axios
            .get(`https://kenziehub.herokuapp.com/profile`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
              dispatch(updateUser(response.data));

              localStorage.setItem(
                "@user:Kenziehub",
                JSON.stringify(response.data)
              );
            });
        }
      })
      .catch(() => notSuccessMessageUpdate("error"));
  };
};
