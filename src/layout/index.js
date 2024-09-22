import React from "react";
import Navigation from "../components/navigation";

function Layout(props) {
  return (
    <div className="w-full h-full">
      <Navigation />
      {props.children}
    </div>
  );
}

export default Layout;
