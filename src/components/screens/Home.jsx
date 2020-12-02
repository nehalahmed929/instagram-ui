import React from "react";
import homeStyles from "../../styles/homeStyles";

// import logo from "../../assets/images/instaLogo.png";
import { Button, Grid, Input } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import postService from "../../services/PostsService";
import PostCard from "../smallComponents/PostCard";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Home = (props) => {
  const [caption, setCaption] = React.useState("");
  const [image, setImage] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const homeClasses = homeStyles();
  return (
    <Grid
      container
      spacing={3}
      // className={homeClasses.root}
      justify="center"
      // alignItems="center"
    >
      <Grid item xs={4}>
        <PostCard
          post={{
            userName: "John Smith",
            userImg: "https://i.imgur.com/RP1Z4WT.jpg",
            postImg:
              "https://media.graphcms.com/resize=w:1650/quality=value:80/compress/0rQ5DDERrP9EOikcP70Q",
            caption: "My pic",
          }}
        />
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
                  postService.addPost({ caption, image });
                }}
              >
                Upload
              </Button>
            </div>
          </Fade>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default Home;
