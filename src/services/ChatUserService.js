import GenericService from "./GenericService";

class ChatUserService extends GenericService {
  constructor() {
    super();
  }

  getChatUsers = (data) => {
    return this.post("chatUsers/whereChat", data);
  };
}

let chatUserService = new ChatUserService();
export default chatUserService;
