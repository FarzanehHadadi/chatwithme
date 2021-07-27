import React, { useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import { useUserContext } from "../contexts/userContext";
import axios from "axios";
const Chatroom = () => {
  const { firebaseUser: user } = useUserContext();
  {
    /* implementing getting user from chat engine 
    1. get all users info
    2. check if user is ther or not
    3. if not add user to users*/
  }
  const getUserFromChatEngine = () => {
    let axios = require("axios");
    let config = {
      method: "get",
      headers: {
        "PRIVATE-KEY": "bf525d2b-2f41-408a-97eb-37a8c0e97087",
      },
      url: "https://api.chatengine.io/users/",
    };
    axios(config).then((response) => {
      const tempUser = response.data.find(
        (curUser) => curUser.username === user.email
      );
      if (!tempUser) {
      }
    });
  };
  useEffect(() => {
    if (!user) return;
    getUserFromChatEngine();
  }, [user]);
  if (!user) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      <ChatEngine
        height="calc(100vh - 100px)"
        userName="admin"
        userSecret="admin"
        projectID="e28658d0-5a47-4e0f-9ced-2db58bab8ee7"
      />
    </div>
  );
};

export default Chatroom;
