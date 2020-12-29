import React from "react";
import authStyles from "../../../styles/authStyles";
import TextField from "@material-ui/core/TextField";
import logo from "../../../assets/images/instaLogo.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import userService from "../../../services/UsersService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const authClasses = authStyles();
  return (
    <Grid
      container
      spacing={3}
      className={authClasses.root}
      justify="center"
      alignItems="center"
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
                  .login(email, password)
                  .then((data) => {
                    load.style.display = "none";
                    window.location.href = "/";
                  })
                  .catch((err) => {
                    load.style.display = "none";
                    toast(err.response.data, {
                      position: toast.POSITION.TOP_LEFT,
                    });
                  });
              }}
            >
              Login
            </Button>
            <Typography
              className={authClasses.alttAuth}
              color="textSecondary"
              align="center"
              variant="body1"
              gutterBottom
            >
              Dont have an acount? <Link to="/register">Sign Up</Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;
