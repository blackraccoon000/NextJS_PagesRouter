import React, {createContext, useEffect, useState} from "react";
import useSWR from "swr";

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

  useSWR(
    "/api/loggedin",
    async (url) => {
      console.log("Fetching data AuthProvider:", url);

      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    {
      onSuccess(data, key, config) {
        setLoggedIn(data?.loggedIn);
      },
    }
  );

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
