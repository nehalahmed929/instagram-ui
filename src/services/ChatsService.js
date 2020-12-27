import GenericService from "./GenericService";

class ChatsService extends GenericService {
  constructor() {
    super();
  }

  getChats = () => {
    return this.get("chats");
  };
}

let chatService = new ChatsService();
export default chatService;
