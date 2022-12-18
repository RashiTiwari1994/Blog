import React from "react";
import AddPost from "../components/AddPost";
import Base from "../components/Base";
import Createblog from "../components/createblog/Createblog";

function Userdashboard() {
  return (
    <div>
      <Base>
        <Createblog />
      </Base>
    </div>
  );
}

export default Userdashboard;
