import GenericService from "./GenericService";

class PostsService extends GenericService {
  constructor() {
    super();
  }
  addPost = (data) => {
    console.log("addpost : " + data);
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("caption", data.caption);
    formData.append("userId", data.usrId);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return this.post("posts", formData, config);
  };

  getPosts = (page = 1, perPage = 10) => {
    return this.get("posts?page=" + page + "&perPage=" + perPage);
  };

  deletePost = (id) => {
    return this.delete("posts/" + id);
  };
  updatePost = (id, data) => {
    return this.put("posts/" + id, data);
  };

  getSinglePost = (id) => {
    return this.get("posts/" + id);
  };
}

let postService = new PostsService();
export default postService;
