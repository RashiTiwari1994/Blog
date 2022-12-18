import React from "react";
import NavBar from "./NavBar";

function Base({ title = "Welcome to our Site", children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Base;
