import React from "react";
import postCardStyles from "../../styles/postCardStyles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  InputBase,
  Typography,
} from "@material-ui/core";

const PostCard = (props) => {
  const postCardClasses = postCardStyles(props);
  return (
    <Card className={postCardClasses.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={props.post.userImg}
            className={postCardClasses.avatar}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.userName}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={postCardClasses.cardImage}
        image={props.post.postImg}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          className={postCardClasses.iconBtn}
        >
          <AiOutlineHeart />
        </IconButton>
        <IconButton aria-label="share" className={postCardClasses.iconBtn}>
          <FaRegComment size="1em" />
        </IconButton>
        <IconButton aria-label="share" className={postCardClasses.iconBtn}>
          <IoPaperPlaneOutline />
        </IconButton>
        <IconButton
          aria-label="share"
          className={[postCardClasses.iconBtn, postCardClasses.bookmarkIcon]}
        >
          <IoBookmarkOutline className={postCardClasses.bookmarkIcon} />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.caption}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          26 likes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          randomUser123 Very niCe Pic
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          1 Day Ago
        </Typography>
      </CardContent>
      <CardContent className={postCardClasses.commentBox}>
        <Divider />
        <InputBase
          className={postCardClasses.commentInput}
          defaultValue="Add a Comment"
          inputProps={{ "aria-label": "naked" }}
        />
      </CardContent>
    </Card>
  );
};

export default PostCard;
