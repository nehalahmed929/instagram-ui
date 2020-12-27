import GenericService from "./GenericService";

class MessagesService extends GenericService {
  constructor() {
    super();
  }

  getMessages = (data) => {
    return this.post("messages/whereChat", data);
  };
}

let messageService = new MessagesService();
export default messageService;
