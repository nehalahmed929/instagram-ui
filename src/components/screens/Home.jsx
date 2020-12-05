import React from "react";
import homeStyles from "../../styles/homeStyles";

// import logo from "../../assets/images/instaLogo.png";
import { Button, Grid, Input } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import postService from "../../services/PostsService";
import userService from "../../services/UsersService";
import PostCard from "../smallComponents/PostCard";
import Auth from "./auth/Auth";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Home = (props) => {
  const [caption, setCaption] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [posts, setPosts] = React.useState([]);

  const [open, setOpen] = React.useState(false);

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
        setPosts(data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          md={5}
          lg={4}
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
                  userImg: "https://i.imgur.com/RP1Z4WT.jpg",
                  postImg: post.imageUrl,
                  caption: post.caption,
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
                <p id="transition-modal-description">Select Image</p>

                <Input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    console.log(e.target.files[0]);
                  }}
                ></Input>
                <Input
                  className={homeClasses.mt}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Caption"
                ></Input>
                <Button
                  variant="contained"
                  className={homeClasses.mt}
                  color="primary"
                  onClick={(e) => {
                    let usrId = userService.getLoggedInUser()._id;
                    postService.addPost({ caption, image, usrId });
                    handleClose();
                    console.log();
                  }}
                >
                  Upload
                </Button>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default Home;
