import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    width: "100%",
  },
  height: {
    // height: "70vh",
  },

  btn: {
    marginTop: "5px",
    width: "100%",
  },
  logo: {
    // width: "70%",
    // maxHeight: "50px",
    width: "200px",
    // marginLeft: "auto",
    // marginRight: "auto",
  },

  card: {
    padding: 10,
  },

  input: {
    marginTop: "4px",
    marginBottom: "4px",
    // height: "50px",
  },

  form: {
    marginTop: "30px",
  },
}));

export default useStyles;
