import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: 20,
    bottom: 40,
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #0003",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    minWidth: 350,
  },

  mt: {
    // marginTop: 10,
  },

  root: {
    paddingTop: 80,
    backgroundColor: "#fafafa",
  },

  postsCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  "@media (max-width:960px)": {
    sidebarCol: {
      display: "none",
      backgroundColor: "red",
    },
  },

  sideBar: {
    position: "fixed",
    width: 270,
  },

  avatar: {
    width: "100%",
  },

  followTxt: {
    fontSize: 12,
    textDecoration: "none",

    color: "rgb(0, 149, 246)",
  },

  myLink: {
    textDecoration: "none",
  },

  avatarSmall: {
    width: 30,
    height: 30,
  },

  avatartxtSecondary: {
    fontSize: 12,
    color: "rgb(142,142,142)",
  },
  avatartxtPrimary: {
    fontSize: 14,
  },

  flex: {
    display: "flex",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  floatRight: {
    float: "right",
  },

  suggestions: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(142,142,142)",
  },

  seeAll: {
    fontSize: 12,
    textDecoration: "none",
    color: "black",
  },

  m0: {
    margin: 0,
  },

  p0: {
    padding: 0,
  },

  trademark: {
    color: "rgb(142,142,142)",
    fontSize: 10,
  },

  imgPreview: {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "300px",
  },

  myImg: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "solid 1px",

    borderRadius: 10,
    minHeight: 200,
    maxWidth: "450px",
    display: "none",
    transition: "ease-in",
  },

  imgIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px",
    borderColor: "#cccccc",
    borderRadius: 10,
    minHeight: 200,
    cursor: "pointer",
  },

  caption: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

export default useStyles;
