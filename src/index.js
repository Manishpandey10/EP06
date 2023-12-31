import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body"


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("root"));
root.render(<AppLayout></AppLayout>);
