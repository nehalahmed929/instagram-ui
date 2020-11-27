import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000/api/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

class GenericService {
  constructor() {}

  get = (url) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  post = (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  put = (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  delete = (url) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };
}

export default GenericService;
