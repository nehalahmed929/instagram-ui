import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";

class UsersService extends GenericService {
  constructor() {
    super();
  }

  getUsers = () => {
    return this.get("users");
  };

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

  register = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("name", data.name);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return this.post("users/register", formData, config);
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
