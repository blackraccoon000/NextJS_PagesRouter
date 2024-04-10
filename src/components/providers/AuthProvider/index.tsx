import React, {createContext, useEffect, useState} from "react";

type AuthContextProps = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextProps>({
  loggedIn: false,
  setLoggedIn: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({children}: Props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  // ログイン状況を取得
  useEffect(() => {
    fetch("/api/loggedin")
      .then((res) => res.json())
      .then((data) => {
        setLoggedIn(data.loggedIn);
      });
  }, []);

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
