import { React, useState, useEffect, useRef } from "react";

import Avatar from "@material-ui/core/Avatar";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { InputBase } from "@material-ui/core";
import { AiOutlineSend } from "react-icons/ai";
import messageService from "../../services/MessagesService";
import userService from "../../services/UsersService";
import Auth from "../screens/auth/Auth";

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

  input: {
    width: "100%",
  },

  sndBtn: {
    cursor: "pointer",
    "& :hover": {
      color: "blue",
    },
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

  otherUserMessage: {
    backgroundColor: "#396bad",
    alignSelf: "flex-start",
  },

  chat: {
    height: "100%",
    // border: "solid 1px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    // justifyContent: "flex-end",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    overflowY: "scroll",
  },
  marginTopAuto: {
    marginTop: "auto",
  },
}));
var socket;
const XchatModule = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(props.chatId);
  const chatUserId = props.chatUser._id;
  const loggedInUserId = userService.getLoggedInUser()._id;
  //   alert(
  //     "chat id:" +
  //       chatId +
  //       "chat user ID :" +
  //       chatUserId +
  //       "prop Chat Id :" +
  //       props.chatId
  //   );

  const getEarlierMessagess = () => {
    // if (chatId) {
    messageService
      .getMessages({ chatId: props.chatId })
      .then((res) => {
        console.log(res);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setChatId(props.chatId);
    // }
  };
  //   useEffect(getEarlierMessages, [props.chatId]);
  useEffect(getEarlierMessagess, [props.chatId]);

  useEffect(() => {
    if (props.chatId === null) {
      props.chatsEmpty([]);
      props.renderChats();
    }
  }, [chatId]);

  useEffect(() => {
    const ENDPOINT = "https://nehal-instagram-api.herokuapp.com";

    socket = io(ENDPOINT);
    socket.on("messageSaved", (data) => {
      console.log("message from backend arrived");
      //   alert("id from backend came :" + data.chat);

      setChatId(data.chat);
      setMessages((messages) => [...messages, data]);
    });

    // return socket.off();
  }, []);

  const sendMessage = () => {
    // alert("current chat iD: " + chatId);
    socket.emit("newMessage", {
      newMessage,
      chatUserId,
      chatId,
      loggedInUserId,
    });

    setNewMessage("");
  };
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView({ behavior: "smooth" }));
    return <div ref={elementRef} />;
  };
  const classes = useStyles();
  return (
    <Auth>
      <div className={classes.root}>
        <div className={classes.chatUser}>
          <Avatar
            alt={props.chatUser.name}
            className={classes.avatar}
            src="/static/images/avatar/1.jpg"
          />
          <h5>{props.chatUser.name}</h5>
        </div>
        <div id="chat" className={classes.chat}>
          <div className={classes.marginTopAuto}></div>
          {messages.map((item, index) => {
            return (
              <p
                className={`${classes.message} ${
                  !(item.user == loggedInUserId)
                    ? classes.otherUserMessage
                    : false
                }`}
              >
                {item.message}
              </p>
            );
          })}
          <AlwaysScrollToBottom />
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
            className={classes.sndBtn}
            onClick={() => {
              sendMessage();
            }}
          />
        </div>
      </div>
    </Auth>
  );
};

export default XchatModule;
