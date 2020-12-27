import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainColumn: {
    paddingTop: 90,
    display: "flex",
    justifyContent: "center",
    alignCOntent: "center",
    backgroundColor: "#FAFAFA",
  },
  content: {
    width: "100%",
    height: 400,
    maxWidth: 940,
    border: "solid 1px",
    backgroundColor: "#fff",
    borderColor: "#cccccc",
    display: "flex",
  },

  leftColumn: {
    width: "30%",
    height: "100%",
    borderRightStyle: "solid",
    borderWidth: 1,
    borderColor: "#cccccc",
  },

  rightColumn: {
    width: "70%",
  },

  loggedInUser: {
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderColor: "#cccccc",
    marginBottom: 15,
  },
  heading: {
    marginLeft: 20,
    // paddingTop: 30,
    fontWeight: 600,
    marginBottom: 25,
  },

  avatar: {
    width: "100%",
  },
  avatarImg: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  myLink: {
    textDecoration: "none",
  },

  newChatIcon: {
    marginLeft: 30,
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
}));

export default useStyles;
