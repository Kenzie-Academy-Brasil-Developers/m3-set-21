import { createContext, useContext, useState } from "react";

import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const user = localStorage.getItem("@user:Kenziehub");

    if (user) {
      return JSON.parse(user);
    }

    return {};
  });

  const [token, setToken] = useState(
    localStorage.getItem("@token:Kenziehub") || ""
  );

  const signIn = (data, history) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        setUserInfo(response.data.user);
        setToken(response.data.token);

        localStorage.setItem(
          "@user:Kenziehub",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem("@token:Kenziehub", response.data.token);

        history.push("/user");
      });
  };

  const updateUser = (data, successMessageUpdate, notSuccessMessageUpdate) => {
    axios
      .put("https://kenziehub.herokuapp.com/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        successMessageUpdate("success");
        setUserInfo({ ...userInfo, bio: data.bio });

        localStorage
          .setItem(
            "@user:Kenziehub",
            JSON.stringify({ ...userInfo, bio: data.bio })
          )
          .catch(() => notSuccessMessageUpdate("error"));
      });
  };

  const logout = () => {
    setUserInfo({});
    setToken("");

    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{ userInfo, token, signIn, updateUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
