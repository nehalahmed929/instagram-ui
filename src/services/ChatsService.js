import GenericService from "./GenericService";

class ChatsService extends GenericService {
  constructor() {
    super();
  }

  getChats = (data) => {
    return this.post("loggedInUserchats", data);
  };
}

let chatService = new ChatsService();
export default chatService;
