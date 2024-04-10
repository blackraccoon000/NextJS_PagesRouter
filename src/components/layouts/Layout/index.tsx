import {AuthContext} from "@/components/providers/AuthProvider";
import {useContext} from "react";
import {LoggedInLayout} from "../LoggedInLayout";
import {NotLoginLayout} from "../NotLoginLayout";

export const Layout = ({children}: {children: React.ReactNode}) => {
  const {loggedIn} = useContext(AuthContext);
  // ログイン状態によってレイアウトを変更
  return loggedIn ? (
    <LoggedInLayout>{children}</LoggedInLayout>
  ) : (
    <NotLoginLayout>{children}</NotLoginLayout>
  );
};
