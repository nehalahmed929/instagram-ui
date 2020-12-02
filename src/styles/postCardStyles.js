import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginTop: 30,
  },
  cardImage: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  iconBtn: {
    margin: 0,
    padding: 0,
    paddingRight: 10,
    color: "black",
  },

  bookmarkIcon: {
    marginLeft: "auto",
  },

  commentBox: {
    paddingBottom: [0, "!important"],
    padding: 0,
  },

  commentInput: {
    color: "#989898",
    fontSize: 12,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 15,
  },
}));

export default useStyles;
