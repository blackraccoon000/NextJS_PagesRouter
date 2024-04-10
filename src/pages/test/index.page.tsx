import {Layout} from "@/components/layouts/Layout";
import {AuthContext} from "@/components/providers/AuthProvider";
import {useContext} from "react";

const Test = () => {
  const {loggedIn, setLoggedIn} = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-5">
      <h1>ログイン状況をコントロール</h1>
      <button
        className="border rounded bg-blue-300 px-4 py-2"
        onClick={() => setLoggedIn((loggedIn) => !loggedIn)}
      >
        {loggedIn ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
};

Test.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Test;
