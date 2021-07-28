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
  const creaetNewUserInChatEngine = () => {
    const axios = require("axios");
    const data = {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
    };
    const config = {
      url: "https://api.chatengine.io/users/",
      method: "post",
      headers: {
        "PRIVATE-KEY": "bf525d2b-2f41-408a-97eb-37a8c0e97087",
      },
      data,
    };
    axios(config)
      .then((response) => console.log(JSON.stringify(response.data)))
      .catch((e) => console.log(e.message));
  };
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
        creaetNewUserInChatEngine();
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
        userName={user.email}
        userSecret={user.uid}
        projectID="e28658d0-5a47-4e0f-9ced-2db58bab8ee7"
      />
    </div>
  );
};

export default Chatroom;
