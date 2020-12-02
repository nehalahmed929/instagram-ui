import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import userService from "../../services/UsersService";
import { withRouter } from "react-router-dom";

const Admin = (props) => {
  if (!userService.isAdmin()) {
    props.history.push("/login");
  }

  return <>{props.children}</>;
};

export default withRouter(Admin);
