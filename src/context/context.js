import React, { useState, createContext } from "react";

// Create Context Object
export const UserContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const UserContextProvider = (props) => {
  const [user, setUserState] = useState({
    username: "nishu",
    password: "password",
    isLoggedIn: false,
  });
  //const [isLoggedIn, setLoggedInState] = useState(false);

  return (
    <UserContext.Provider value={[user, setUserState]}>
      {props.children}
    </UserContext.Provider>
  );
};
