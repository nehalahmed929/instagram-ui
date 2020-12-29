import React from "react";
import homeStyles from "../../styles/homeStyles";

// import logo from "../../assets/images/instaLogo.png";
import { Button, Grid, Input } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import postService from "../../services/PostsService";
import userService from "../../services/UsersService";
import likeService from "../../services/LikesService";
import PostCard from "../smallComponents/PostCard";
import Auth from "./auth/Auth";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { AiFillPlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { Link } from "react-router-dom";
import friendshipService from "../../services/FrienshipsService";
import SidebarUser from "../smallComponents/SidebarUser";

const Home = (props) => {
  const [caption, setCaption] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
  const [doPost, setdoPost] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  // const [loggedInUser, setloggedInUser] = React.useState();
  const [users, setUsers] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPosts = () => {
    postService
      .getPosts()
      .then((data) => {
        // console.log("inside products" + data);
        setPosts(data.posts.reverse());
        console.log("inside home :" + data.posts[0]._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    userService
      .getUsers()
      .then((res) => {
        setUsers(res.users.reverse());
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const loggedInUser = userService.getLoggedInUser();

  // React.useEffect(getLoggedInUser, []);
  React.useEffect(getUsers, []);

  React.useEffect(getPosts, [open]);

  const homeClasses = homeStyles();
  return (
    <Auth>
      <Grid
        container
        spacing={3}
        className={homeClasses.root}
        justify="center"
        // alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={6}
          className={homeClasses.postsCol}
        >
          {posts.length === 0 ? (
            <p>There are no posts</p>
          ) : (
            // <Grid container spacing={3}>
            posts.map((post, index) => (
              <PostCard
                key={index}
                post={{
                  userName: post.user.name,
                  userImg: post.user.imageUrl,
                  postImg: post.imageUrl,
                  caption: post.caption,
                  userId: userService.getLoggedInUser()._id,
                  postId: post._id,
                  createdAt: post.createdAt,
                }}
                // onDelete={getPosts}
              />
            ))
            /* </Grid> */
          )}

          <Fab
            className={homeClasses.fab}
            color="primary"
            aria-label="add"
            onClick={handleOpen}
          >
            <AddIcon />
          </Fab>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={homeClasses.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={homeClasses.paper}>
                <h2 id="transition-modal-title">Create Post</h2>
                {/* <p id="transition-modal-description">Select Image</p> */}
                {/* <div className={homeClasses.imgPreview}> */}
                <img
                  src=""
                  alt="Select Image"
                  id="my-img"
                  className={homeClasses.myImg}
                  onClick={() => {
                    let imgInput = document.getElementById("inputFile");
                    imgInput.click();
                  }}
                />
                <div
                  className={homeClasses.imgIcon}
                  id="imgIcon"
                  onClick={() => {
                    let imgInput = document.getElementById("inputFile");
                    imgInput.click();
                  }}
                >
                  <AiFillPlusCircle size={50} color="#cccccc" />
                  <p>Select Image</p>
                </div>

                {/* </div> */}

                <Input
                  id="inputFile"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    let src = URL.createObjectURL(e.target.files[0]);
                    let img = document.getElementById("my-img");
                    let icon = document.getElementById("imgIcon");
                    img.src = src;
                    icon.style.display = "none";

                    img.style.display = "flex";
                    console.log(e.target.files[0]);
                  }}
                ></Input>
                <Input
                  className={homeClasses.caption}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Caption"
                ></Input>
                <Button
                  variant="contained"
                  className={homeClasses.mt}
                  color="primary"
                  onClick={(e) => {
                    let load = document.getElementById("my-loader");
                    load.style.display = "block";
                    let usrId = userService.getLoggedInUser()._id;
                    postService
                      .addPost({ caption, image, usrId })
                      .then((res) => {
                        handleClose();
                        load.style.display = "none";
                        toast("Posted successfully!", {
                          position: toast.POSITION.TOP_LEFT,
                        });
                      })
                      .catch((err) => {
                        load.style.display = "none";
                        console.log(err);
                      });
                  }}
                >
                  Post
                </Button>
              </div>
            </Fade>
          </Modal>
        </Grid>
        <Grid item md={3} className={homeClasses.sidebarCol}>
          <div className={homeClasses.sideBar}>
            <List className={homeClasses.avatar}>
              <ListItem alignItems="center" className={homeClasses.p0}>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={loggedInUser ? loggedInUser.imageUrl : false}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link className={homeClasses.myLink}>
                      <Typography
                        component="span"
                        variant="body2"
                        className={homeClasses.avatartxtPrimary}
                        color="textPrimary"
                      >
                        {loggedInUser ? loggedInUser.name : false}
                      </Typography>
                    </Link>
                  }
                />
                <Link className={homeClasses.followTxt}>Switch</Link>
              </ListItem>
            </List>
            <div className={clsx(homeClasses.flex, homeClasses.justifyBetween)}>
              <span className={homeClasses.suggestions}>
                Suggestions For You
              </span>
              <Link className={homeClasses.seeAll}>See All</Link>
            </div>
            <div>
              <List className={homeClasses.avatar}>
                {users.map((item, index) => {
                  return item._id === loggedInUser._id ? (
                    false
                  ) : index < 5 ? (
                    <SidebarUser
                      user={{
                        id: item._id,
                        name: item.name,
                        imageUrl: item.imageUrl,
                      }}
                      loggedInUserId={loggedInUser._id}
                    />
                  ) : (
                    false
                  );
                })}
              </List>
              <div className={homeClasses.trademark}>
                © 2020 INSTAGRAM BY NEHAL
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default Home;
