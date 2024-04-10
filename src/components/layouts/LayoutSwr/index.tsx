import {LoggedInLayout} from "../LoggedInLayout";
import {NotLoginLayout} from "../NotLoginLayout";
import useSWR from "swr";

export const LayoutSwr = ({children}: {children: React.ReactNode}) => {
  const {data} = useSWR("/api/loggedin", async (url) => {
    console.log("Fetching data LayoutSwr:", url);

    const res = await fetch(url);
    const data = await res.json();
    return data;
  });

  // ログイン状態によってレイアウトを変更
  return data?.loggedIn ? (
    <LoggedInLayout>{children}</LoggedInLayout>
  ) : (
    <NotLoginLayout>{children}</NotLoginLayout>
  );
};
