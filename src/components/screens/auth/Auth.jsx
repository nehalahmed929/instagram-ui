import React from "react";
import userService from "../../../services/UsersService";
import { withRouter } from "react-router-dom";
//debuging heroku error
const Auth = (props) => {
  if (!userService.isLoggedIn()) {
    props.history.push("/login");
  }

  return <>{props.children}</>;
};

export default withRouter(Auth);
