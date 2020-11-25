import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import userService from "../../services/UsersService";
import { toast } from "react-toastify";

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

const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
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
                .register(name, email, password)
                .then((res) => {
                  props.history.push("/login");
                  toast.success("Registered Successfully !", {
                    position: toast.POSITION.TOP_LEFT,
                  });
                })
                .catch((err) => {
                  toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT,
                  });
                });
              // window.location.href = "/login";
            }}
          >
            Register
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Register;
