import React from "react";
import postCardStyles from "../../styles/postCardStyles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AiFillHeart } from "react-icons/ai";
import moment from "moment";
import { IoBookmarkOutline } from "react-icons/io5";
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
import likeService from "../../services/LikesService";
import commentService from "../../services/CommentsService";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const postCardClasses = postCardStyles(props);
  console.log("inside postcard :  user id  =  " + props.post.postId);
  const [liked, setLiked] = React.useState();
  const [comments, setComments] = React.useState([]);
  const [newComment, setnewComment] = React.useState();
  const [totalLikes, settotalLikes] = React.useState();
  const [doLike, setdoLike] = React.useState();

  const initialLiked = () => {
    likeService
      .isLiked({
        userId: props.post.userId,
        postId: props.post.postId,
      })
      .then((res) => {
        setLiked(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostComments = () => {
    commentService
      .postComments({ postId: props.post.postId })
      .then((res) => {
        console.log("comment response = " + res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTotalLikes = () => {
    likeService
      .totalLikes({ postId: props.post.postId })
      .then((res) => {
        console.log("total likes :" + res.data);
        settotalLikes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = () => {
    !liked
      ? likeService
          .addLike({
            userId: props.post.userId,
            postId: props.post.postId,
          })
          .then((res) => {
            setLiked(res.data);
            console.log("just liked :" + res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      : likeService
          .deleteLike(liked._id)
          .then((res) => {
            setLiked(false);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
  };

  // React.useEffect(() => {
  //   getTotalLikes();
  //   getPostComments();
  //   initialLiked();
  // }, [newComment]);

  React.useEffect(getPostComments, [props.post.postId, newComment]);
  React.useEffect(getTotalLikes, [liked, props.post.postId]);

  React.useEffect(initialLiked, [props.post.postId, props.post.userId]);

  const HeartFill = () => {
    return (
      <svg
        aria-label="Unlike"
        class="_8-yf5 "
        fill="#ed4956"
        height="24"
        viewBox="0 0 48 48"
        width="24"
      >
        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
      </svg>
    );
  };

  const HeartOutline = () => {
    return (
      <svg
        aria-label="Like"
        class="_8-yf5 "
        fill="#262626"
        height="24"
        viewBox="0 0 48 48"
        width="24"
      >
        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
      </svg>
    );
  };
  return (
    <Card className={`${postCardClasses.root}`}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={props.post.userImg}
            className={postCardClasses.avatar}
          >
            U
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.userName}
        // subheader="September 14, 2016"
      />
      <CardMedia
        image={props.post.postImg}
        className={`${postCardClasses.cardImage} cardImage`}
        title="Paella dish"
        onDoubleClick={() => {
          if (!liked) handleLike();
          setdoLike("animate-heart");

          setTimeout(function () {
            setdoLike("");
          }, 500);
        }}
        children={
          <AiFillHeart
            size={70}
            color="#fff"
            className={`instagram-heart ${doLike}`}
          />
        }
      />
      <CardActions disableSpacing className={postCardClasses.cardActions}>
        <IconButton
          aria-label="add to favorites"
          className={postCardClasses.iconBtn}
          onClick={handleLike}
        >
          {liked ? <HeartFill /> : <HeartOutline />}
        </IconButton>
        <IconButton aria-label="share" className={postCardClasses.iconBtn}>
          <svg
            aria-label="Comment"
            class="_8-yf5 "
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </IconButton>
        <IconButton aria-label="share" className={postCardClasses.iconBtn}>
          <svg
            aria-label="Share Post"
            class="_8-yf5 "
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </IconButton>
        <IconButton
          aria-label="share"
          className={[postCardClasses.iconBtn, postCardClasses.bookmarkIcon]}
        >
          <IoBookmarkOutline className={postCardClasses.bookmarkIcon} />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" component="p">
          {totalLikes} Likes
        </Typography>
        <div className={postCardClasses.caption}>
          <Typography variant="body2" component="p">
            <span className={postCardClasses.captionUser}>
              {props.post.userName}{" "}
            </span>{" "}
            {props.post.caption}
          </Typography>
        </div>

        <div className={postCardClasses.comments}>
          {comments.map((item, index) => {
            return (
              <div className={postCardClasses.comment}>
                <span className={postCardClasses.commentUser}>
                  {item.user.name}
                </span>
                <Typography
                  key={index}
                  variant="body2"
                  // color="textSecondary"
                  component="span"
                >
                  {item.comment}
                </Typography>
              </div>
            );
          })}
        </div>

        <Typography variant="body2" color="textSecondary" component="p">
          1 Day Ago
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={postCardClasses.commentBox}>
        <InputBase
          className={postCardClasses.commentInput}
          placeholder="Add a Comment"
          value={newComment}
          onChange={(e) => {
            setnewComment(e.target.value);
          }}
          inputProps={{ "aria-label": "naked" }}
        />
        <Link
          onClick={() => {
            if (!newComment == "") {
              commentService
                .addComment({
                  postId: props.post.postId,
                  userId: props.post.userId,
                  comment: newComment,
                  createdAt: moment(),
                })
                .then((res) => {
                  setComments([
                    ...comments,
                    { post: res.data.post, user: res.data.user },
                  ]);
                  setnewComment("");
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }}
          className={postCardClasses.cmntPostLink}
        >
          Post
        </Link>
      </CardContent>
    </Card>
  );
};

export default PostCard;
