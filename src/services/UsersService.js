import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";

class UsersService extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) => {
    return new Promise((res, rej) => {
      this.post("users/login", { email, password })
        .then((token) => {
          console.log("inside token: " + token.data);
          localStorage.setItem("token", token.data);
          res(token.data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };

  register = (name, email, password) => {
    // console.log(data);
    return this.post("users/register", { name, email, password });
  };

  logout = () => {
    // console.log(data);
    localStorage.removeItem("token");
  };

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  getLoggedInUser = () => {
    try {
      return jwtDecode(localStorage.getItem("token"));
    } catch (err) {
      return null;
    }
  };

  isAdmin = () => {
    if (this.isLoggedIn())
      if (this.getLoggedInUser()) return true;
      else return false;
    else return false;
  };
}

let userService = new UsersService();
export default userService;
