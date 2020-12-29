import React from "react";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  MenuItem,
  Menu,
  InputBase,
  Avatar,
} from "@material-ui/core";

import { withRouter } from "react-router";
import userService from "../../services/UsersService";
import navbarStyles from "../../styles/navbarStyles";
import logo from "../../assets/images/instaLogo.png";
import SearchIcon from "@material-ui/icons/Search";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const classes = navbarStyles();
  //   const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          userService.logout();
          handleMenuClose();
          window.location.href = "/login";
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="white" className={classes.appbar}>
        <Toolbar>
          <img src={logo} className={classes.logo} alt="" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="black"
              onClick={() => {
                props.history.push("/");
              }}
            >
              <Badge badgeContent={0} color="secondary">
                <AiOutlineHome />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="black">
              <Badge badgeContent={0} color="secondary">
                <IoPaperPlaneOutline
                  onClick={() => {
                    props.history.push("/messages");
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="black">
              <Badge badgeContent={0} color="secondary">
                <AiOutlineCompass />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="black"
            >
              <Avatar
                aria-label="recipe"
                src={userService.getLoggedInUser().imageUrl}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
};
export default withRouter(Navbar);
