import GenericService from "./GenericService";

class LikesService extends GenericService {
  constructor() {
    super();
  }
  addLike = (data) => {
    return this.post("likes", data);
  };

  getLikes = () => {
    return this.get("likes");
  };

  deleteLike = (id) => {
    return this.delete("likes/" + id);
  };
  updateLike = (id, data) => {
    return this.put("likes/" + id, data);
  };

  getSingleLike = (id) => {
    return this.get("likes/" + id);
  };

  isLiked = (data) => {
    return this.post("likes/isLiked", data);
  };

  totalLikes = (data) => {
    return this.post("likes/total", data);
  };
}

let likeService = new LikesService();
export default likeService;
