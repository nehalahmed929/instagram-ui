import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import userService from "../../services/UsersService";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
  },
  height: {
    height: "70vh",
  },

  btn: {
    marginTop: "15px",
  },
}));

const Login = () => {
  const [email, setEmail] = React.useState("admin@gmail.com");
  const [password, setPassword] = React.useState("1234");

  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      className={classes.height}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={5}>
        <form noValidate autoComplete="off">
          <Grid item xs={12}>
            <TextField
              id="standard-basic"
              className={classes.input}
              label="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-basic"
              className={classes.input}
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Button
            variant="contained"
            className={classes.btn}
            color="primary"
            onClick={(e) => {
              userService
                .login(email, password)
                .then((data) => {
                  console.log(data);
                  window.location.href = "/";
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
