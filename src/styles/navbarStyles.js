import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    textDecoration: "none",
    paddingRight: "1rem",
  },

  appbar: {
    backgroundColor: "white",
  },
  authButtons: {
    marginLeft: "auto",
  },
  logo: {
    // width: "70%",
    // maxHeight: "50px",
    width: "150px",
    // marginLeft: "auto",
    // marginRight: "auto",
  },

  registerButton: {
    marginLeft: "10px",
  },

  grow: {
    flexGrow: 1,
  },

  title: {
    display: "block",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },
  search: {
    display: "none",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      display: "block",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
  },
}));

export default useStyles;
