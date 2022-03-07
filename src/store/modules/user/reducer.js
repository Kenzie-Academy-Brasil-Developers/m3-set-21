import { SIGN_IN, UPDATE_USER } from "./actionTypes";

const token = localStorage.getItem("@token:Kenziehub") || "";
const userInfo = localStorage.getItem("@user:Kenziehub") || "{}";

const initialState = { userInfo: JSON.parse(userInfo), token: token };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { user, token } = action.user;
      return { userInfo: user, token };

    case UPDATE_USER:
      return { ...state, userInfo: action.user };

    default:
      return state;
  }
};

export default userReducer;
