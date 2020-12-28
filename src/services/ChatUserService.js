import GenericService from "./GenericService";

class ChatUserService extends GenericService {
  constructor() {
    super();
  }

  getChatUsers = (data) => {
    return this.post("chatUsers/whereChat", data);
  };

  getChatsWhereUser = (data) => {
    return this.post("chatUsers/whereUser", data);
  };
}

let chatUserService = new ChatUserService();
export default chatUserService;
