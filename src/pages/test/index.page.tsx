import {useEffect} from "react";

const Test = () => {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.name);
      });
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Test</h1>
    </main>
  );
};

export default Test;
