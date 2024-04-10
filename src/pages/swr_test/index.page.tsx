import {LayoutSwr} from "@/components/layouts/LayoutSwr";
import useSWR from "swr";

const SwrTest = () => {
  const {data} = useSWR("/api/loggedin", async (url) => {
    console.log("Fetching data SwrTest:", url);

    const res = await fetch(url);
    const data = await res.json();
    return data;
  });

  return (
    <div className="flex flex-col gap-5">
      <h1>ログイン状況: {data?.loggedIn ? "ログイン済み" : "未ログイン"}</h1>
    </div>
  );
};

SwrTest.getLayout = (page: React.ReactNode) => {
  return <LayoutSwr>{page}</LayoutSwr>;
};

export default SwrTest;
