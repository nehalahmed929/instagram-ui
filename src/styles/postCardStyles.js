import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "650px",
    marginBottom: 30,
    width: "100%",
  },
  cardImage: {
    width: "100%",
    height: 352,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  iconBtn: {
    margin: 0,
    padding: 0,
    paddingRight: 10,
    color: "rgb(38, 38, 38)",

    fontSize: 27,
  },

  bookmarkIcon: {
    marginLeft: "auto",
  },

  cardActions: {
    padding: "10px 10px 0px 15px",
  },

  caption: {
    marginTop: 10,
    marginBottom: 10,
  },

  captionUser: {
    fontWeight: 500,
  },
  commentBox: {
    paddingBottom: [0, "!important"],
    padding: 0,
    display: "flex",
    alignItems: "center",
  },

  commentInput: {
    color: "#989898",
    fontSize: 12,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 15,
    width: "100%",
  },
  comments: {
    marginTop: 5,
    marginBottom: 10,
    color: "black",
  },
  comment: {
    wordWrap: "anywhere",
    alignItems: "center",
  },

  commentUser: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: 10,
  },

  cmntPostLink: {
    textDecoration: "none",
    marginLeft: "auto",
    fontSize: 14,
    marginRight: 25,
    color: "rgb(0, 149, 246)",
  },
}));

export default useStyles;
