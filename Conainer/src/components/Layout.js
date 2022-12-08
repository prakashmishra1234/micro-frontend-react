import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header color={"secondary"} title={"Demo"} />
      {props.children}
    </>
  );
};

export default Layout;
