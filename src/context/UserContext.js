import React, { useState, useEffect } from "react";
import { getUserAccount } from "../services/userService";
const UserContext = React.createContext({
  isAuthenticated: false,
  token: "",
});

const UserProvider = ({ children }) => {
  const defaultUser = {
    isLoading: true,
    isAuthenticated: false,
    token: "",
    account: {},
  };
  const [user, setUser] = useState(defaultUser);

  const loginContext = (userData) => {
    setUser({ ...userData, isLoading: false });
  };
  const logoutContext = () => {
    setUser({ ...defaultUser, isLoading: false });
  };
  const fetchUser = async () => {
    let response = await getUserAccount();
    if (response && response.EC === "0") {
      let role = response.DT.role;
      let username = response.DT.username;
      let token = response.DT.access_token;
      let data = {
        isAuthenticated: true,
        isActive:response.DT.active===0?true:false,
        token: token,
        account: { role, username },
        isLoading: false,
      };
      console.log(response);
      setUser(data);
    } else {
      setUser({ ...defaultUser, isLoading: false });
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loginContext, logoutContext }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
