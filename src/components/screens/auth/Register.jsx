import React from "react";
import authStyles from "../../../styles/authStyles";
import TextField from "@material-ui/core/TextField";
import logo from "../../../assets/images/instaLogo.png";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Input,
  Typography,
} from "@material-ui/core";
import userService from "../../../services/UsersService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [image, setImage] = React.useState(null);

  const authClasses = authStyles();
  return (
    <Grid
      container
      spacing={3}
      className={authClasses.root}
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid item xs={12} className={authClasses.column}>
        <Card className={authClasses.card} variant="outlined">
          <CardContent className={authClasses.container}>
            <img src={logo} className={authClasses.logo} alt="" />
            <Typography
              className={authClasses.title}
              color="textSecondary"
              align="center"
              variant="h6"
              gutterBottom
            >
              Sign up to see photos and videos from your friends.
            </Typography>
            <form className={authClasses.form} noValidate autoComplete="off">
              <img
                src=""
                alt="Select Image"
                id="my-user-img"
                className={authClasses.myImg}
                onClick={() => {
                  let imgInput = document.getElementById("inputUserImg");
                  imgInput.click();
                }}
              />
              <div
                className={authClasses.imgIcon}
                id="user-imgIcon"
                onClick={() => {
                  let imgInput = document.getElementById("inputUserImg");
                  imgInput.click();
                }}
              >
                <AiFillPlusCircle size={50} color="#cccccc" />
              </div>
              <Input
                id="inputUserImg"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  let src = URL.createObjectURL(e.target.files[0]);
                  let img = document.getElementById("my-user-img");
                  let icon = document.getElementById("user-imgIcon");
                  img.src = src;
                  icon.style.display = "none";

                  img.style.display = "flex";
                  console.log(e.target.files[0]);
                }}
              ></Input>
              <TextField
                id="outlined-basic"
                className={authClasses.input}
                label="Email"
                variant="outlined"
                margin="dense"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                className={authClasses.input}
                label="Name"
                variant="outlined"
                margin="dense"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                className={authClasses.input}
                label="Password"
                variant="outlined"
                margin="dense"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                fullWidth
              />
            </form>
            <Button
              className={authClasses.btn}
              variant="contained"
              color="primary"
              onClick={(e) => {
                let load = document.getElementById("my-loader");
                load.style.display = "block";
                userService
                  .register({ name, email, password, image })
                  .then((res) => {
                    load.style.display = "none";
                    props.history.push("/login");
                  })
                  .catch((err) => {
                    load.style.display = "none";
                    toast(err, {
                      position: toast.POSITION.TOP_LEFT,
                    });
                  });
                // window.location.href = "/login";
              }}
            >
              Sign Up
            </Button>
            <Typography
              className={authClasses.alttAuth}
              color="textSecondary"
              align="center"
              variant="body1"
              gutterBottom
            >
              Already have an acount? <Link to="/login">Log In</Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;
