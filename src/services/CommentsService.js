import GenericService from "./GenericService";

class CommentsService extends GenericService {
  constructor() {
    super();
  }
  addComment = (data) => {
    return this.post("comments", data);
  };

  getComments = () => {
    return this.get("comments");
  };

  deleteComment = (id) => {
    return this.delete("comments/" + id);
  };
  updateComment = (id, data) => {
    return this.put("comments/" + id, data);
  };

  getSingleComment = (id) => {
    return this.get("comments/" + id);
  };

  postComments = (data) => {
    return this.post("comments/postComments", data);
  };
}

let commentService = new CommentsService();
export default commentService;
