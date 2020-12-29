import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#fafafa",
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

  column: {
    alignSelf: "center",
    marginTop: "90px !important",
    maxWidth: "450px !important",
  },

  alttAuth: {
    marginTop: "40px !important",
  },

  input: {
    marginTop: "4px",
    marginBottom: "4px",
    // height: "50px",
  },

  form: {
    marginTop: "30px",
  },

  myImg: {
    width: "30%",
    // height: "20%",
    maxHeight: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "solid 1px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    borderRadius: "50%",
    minHeight: 100,
    maxWidth: "350px",
    display: "none",
    transition: "ease-in",
  },
  imgIcon: {
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px",
    borderColor: "#cccccc",
    borderRadius: "50%",
    minHeight: 120,
    cursor: "pointer",
  },
}));

export default useStyles;
