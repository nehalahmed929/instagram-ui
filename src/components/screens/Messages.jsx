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
import friendshipService from "../../services/FrienshipsService";
import { BiMessageEdit } from "react-icons/bi";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import userService from "../../services/UsersService";
import ChatModule from "../smallComponents/ChatModule";
import chatService from "../../services/ChatsService";
import chatUserService from "../../services/ChatUserService";
import messageService from "../../services/MessagesService";

const Messages = (props) => {
  const [chatUser, setChatUser] = useState();
  const [chats, setChats] = useState([]);
  const [chatId, setChatId] = useState([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);

  const loggedInUser = userService.getLoggedInUser();

  const getChats = () => {
    chatService
      .getChats()
      .then((res) => {
        let chatss = res;

        chatss.map((item, index) => {
          chatUserService
            .getChatUsers({ chatId: item._id })
            .then((res) => {
              // console.log(res.data);

              setChats(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getChats, []);
  useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        setUsers(res);
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
                  <div className={classes.modalUsers}>
                    {users.map((item, index) => {
                      return (
                        <>
                          <Avatar
                            alt={item.name}
                            className={messageClasses.modalAvatar}
                            src="/static/images/avatar/1.jpg"
                          />
                          <h5 className={messageClasses.modalUserName}>
                            {item.name}
                          </h5>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
          <div className={messageClasses.content}>
            <div className={messageClasses.leftColumn}>
              <div className={messageClasses.loggedInUser}>
                nehalahmed929{" "}
                <BiMessageEdit
                  size={30}
                  className={messageClasses.newChatIcon}
                  onClick={handleOpen}
                />{" "}
              </div>
              <div calss>
                <h4 className={messageClasses.heading}>Messages</h4>
                <div>
                  <List className={messageClasses.avatar}>
                    {chats.map((item, index) => {
                      return (
                        <ListItem
                          alignItems="center"
                          className={messageClasses.p0}
                          onClick={() => {
                            setChatUser(item.user);
                            setChatId(item._id);
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
                    })}
                  </List>
                </div>
              </div>
            </div>
            <div className={messageClasses.rightColumn}>
              {chatUser ? (
                <ChatModule chatUser={chatUser} chatId={chatId} />
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
