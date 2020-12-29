import React, { useEffect, useState } from "react";
import messagesStyles from "../../styles/messagesStyles";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Auth from "./auth/Auth";
import { Link } from "react-router-dom";
import { BiMessageEdit } from "react-icons/bi";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import userService from "../../services/UsersService";
import XchatModule from "../smallComponents/XchatModule";
import chatUserService from "../../services/ChatUserService";

const Messages = (props) => {
  const [chatUser, setChatUser] = useState();
  const [chats, setChats] = useState([]);
  const [chatId, setChatId] = useState([]);
  const [users, setUsers] = useState([]);
  const [newChat, setNewChat] = useState();
  const [open, setOpen] = useState(false);

  const loggedInUser = userService.getLoggedInUser();
  // alert("reddered");
  const getChats = () => {
    chatUserService
      .getChatsWhereUser({ userId: loggedInUser ? loggedInUser._id : null })
      .then((res) => {
        let chatss = res.data;

        chatss.map((item, index) => {
          chatUserService
            .getChatUsers({ chatId: item.chat._id })
            .then((res) => {
              // console.log(res.data);
              console.log(res);
              setChats((chats) => [...chats, ...res.data]);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(chats);
  };

  const createNewChat = (user) => {
    setNewChat(user);
  };

  useEffect(getChats, [loggedInUser ? loggedInUser._id : null, newChat]);
  useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        setUsers(res.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const messageClasses = messagesStyles();
  return (
    <Auth>
      <Grid
        // container
        spacing={3}
        className={messageClasses.root}
        justify="center"
        // alignItems="center"
      >
        <Grid item md={12} className={messageClasses.mainColumn}>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={messageClasses.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={messageClasses.paper}>
                <div>Send New Message to</div>
                <div>
                  <div className={messageClasses.modalUsers}>
                    {users.map((item, index) => {
                      if (!(item._id === loggedInUser._id)) {
                        return (
                          <div
                            className={messageClasses.modalUser}
                            onClick={() => {
                              setChatUser(item);
                              let chatID = chats.find(
                                (chat) => chat.user._id === item._id
                              );
                              chatID === undefined
                                ? setChatId(null)
                                : setChatId(chatID.chat);
                              console.log(
                                chats.find((chat) => chat.user._id === item._id)
                              );
                              handleClose();
                            }}
                          >
                            <Avatar
                              alt={item.name}
                              className={messageClasses.modalAvatar}
                              src={item.imageUrl}
                            />
                            <h5 className={messageClasses.modalUserName}>
                              {item.name}
                            </h5>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
          <div className={messageClasses.content}>
            <div className={messageClasses.leftColumn}>
              <div className={messageClasses.loggedInUser}>
                {loggedInUser ? loggedInUser.name : false}
                <BiMessageEdit
                  size={30}
                  className={messageClasses.newChatIcon}
                  onClick={handleOpen}
                />{" "}
              </div>
              <div>
                <h4 className={messageClasses.heading}>Messages</h4>
                <div>
                  <List className={messageClasses.avatar}>
                    {chats.map((item, index) => {
                      if (!(item.user._id === loggedInUser._id)) {
                        return (
                          <ListItem
                            alignItems="center"
                            className={messageClasses.p0}
                            onClick={() => {
                              setChatUser(item.user);
                              setChatId(item.chat);
                            }}
                          >
                            <ListItemAvatar>
                              <Avatar
                                alt={item.user.name}
                                src="/static/images/avatar/1.jpg"
                                size="medium"
                                className={messageClasses.avatarImg}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Link className={messageClasses.myLink}>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={messageClasses.avatartxtPrimary}
                                    color="textPrimary"
                                  >
                                    {item.user.name}
                                  </Typography>
                                </Link>
                              }
                            />
                          </ListItem>
                        );
                      }
                    })}
                  </List>
                </div>
              </div>
            </div>
            <div className={messageClasses.rightColumn}>
              {chatUser ? (
                <XchatModule
                  chatUser={chatUser}
                  chatId={chatId}
                  renderChats={getChats}
                  chatsEmpty={setChats}
                />
              ) : (
                false
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default Messages;
