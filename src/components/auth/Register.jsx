import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import authStyles from "../../styles/authStyles";
import TextField from "@material-ui/core/TextField";
import logo from "../../assets/images/instaLogo.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import userService from "../../services/UsersService";

const Register = (props) => {
  const [name, setName] = React.useState("");
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
      <Grid item xs={4}>
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
            >
              Sign Up
            </Button>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;
