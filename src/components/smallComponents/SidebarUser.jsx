import { React, useState, useEffect } from "react";

import postService from "../../services/PostsService";
import userService from "../../services/UsersService";
import likeService from "../../services/LikesService";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { Link } from "react-router-dom";
import friendshipService from "../../services/FrienshipsService";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  p0: {
    padding: 0,
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
}));

const SidebarUser = (props) => {
  const [followed, setFollowed] = useState(false);
  const flag = false;

  const isFollowing = () => {
    friendshipService
      .isFollowing({
        followerId: props.loggedInUserId,
        followingId: props.user.id,
      })
      .then((res) => {
        setFollowed(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(isFollowing, [flag]);

  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="center" className={clsx(classes.p0)}>
        <ListItemAvatar>
          <Avatar
            alt={props.user.name}
            src={props.user.imageUrl}
            className={classes.avatarSmall}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Link className={classes.myLink}>
              <Typography
                component="span"
                variant="body2"
                className={classes.avatartxtPrimary}
                color="textPrimary"
              >
                {props.user.name}
              </Typography>
            </Link>
          }
          secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.avatartxtSecondary}
              color="textPrimary"
            >
              Suggested for you
            </Typography>
          }
        />
        <Link
          className={classes.followTxt}
          onClick={(e) => {
            if (!followed) {
              friendshipService
                .addFriendship({
                  followerId: props.loggedInUserId,
                  followingId: props.user.id,
                  createdAt: moment(),
                })
                .then((res) => {
                  setFollowed(res.data);
                  flag = !flag;
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (followed) {
              friendshipService
                .deleteFriendship(followed._id)
                .then((res) => {
                  setFollowed(false);
                  flag = !flag;
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }}
        >
          {followed ? "Following" : "Follow"}
        </Link>
      </ListItem>
    </>
  );
};

export default SidebarUser;
