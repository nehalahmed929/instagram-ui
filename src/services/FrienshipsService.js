import GenericService from "./GenericService";

class FriendshipsService extends GenericService {
  constructor() {
    super();
  }
  addFriendship = (data) => {
    return this.post("friendships", data);
  };

  getFriendships = () => {
    return this.get("friendships");
  };

  deleteFriendship = (id) => {
    return this.delete("friendships/" + id);
  };

  getSingleFriendship = (id) => {
    return this.get("friendships/" + id);
  };

  isFollowing = (data) => {
    return this.post("friendships/isFollowing", data);
  };

  getFollowings = (data) => {
    return this.post("friendships/followings", data);
  };

  totalFriendships = (data) => {
    return this.post("friendships/total", data);
  };
}

let friendshipService = new FriendshipsService();
export default friendshipService;
