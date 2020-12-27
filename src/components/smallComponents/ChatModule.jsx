import { React, useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { InputBase } from "@material-ui/core";
import { AiOutlineSend } from "react-icons/ai";
import messageService from "../../services/MessagesService";
import userService from "../../services/UsersService";

const useStyles = makeStyles((theme) => ({
  chatUser: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    paddingLeft: 20,
    // width: "100%",
    borderBottom: "solid 1px #cccccc",
  },

  avatar: {
    marginRight: 15,
  },

  inputContainer: {
    // width: "100%",
    border: "solid 1px #cccccc",
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },

  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  message: {
    border: "solid 1px transparent",
    borderRadius: 10,
    // float: "right",
    // display: "inline-block",
    margin: 5,
    padding: "5px 10px 5px 10px",
    backgroundColor: "#F50057",
    color: "white",
  },
  chat: {
    height: "100%",
    // border: "solid 1px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
    overflowY: "scroll",
  },
}));

let socket;
const ChatModule = (props) => {
  const ENDPOINT = "localhost:4000";
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatUserId = props.chatUser._id;
  const chatId = props.chatId;
  const loggedInUserId = userService.getLoggedInUser()._id;

  const getEarlierMessages = () => {
    messageService
      .getMessages({ chatId: props.chatId })
      .then((res) => {
        console.log(res);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("messageSaved", (data) => {
      console.log("message from backend arrived");
      setMessages([...messages, data]);
    });
  }, []);

  useEffect(getEarlierMessages, []);

  const sendMessage = () => {
    socket.emit("newMessage", {
      newMessage,
      chatUserId,
      chatId,
      loggedInUserId,
    });

    setNewMessage("");
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.chatUser}>
          <Avatar
            alt={props.chatUser.name}
            className={classes.avatar}
            src="/static/images/avatar/1.jpg"
          />
          <h5>{props.chatUser.name}</h5>
        </div>
        <div className={classes.chat}>
          {messages.map((item, index) => {
            return <p className={classes.message}>{item.message}</p>;
          })}
        </div>
        <div className={classes.inputContainer}>
          <InputBase
            className={classes.input}
            placeholder="Type here..."
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            inputProps={{ "aria-label": "naked" }}
          />
          <AiOutlineSend
            size={23}
            onClick={() => {
              sendMessage();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChatModule;
