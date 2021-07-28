import React, { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { useUserContext } from "../contexts/userContext";
const Chatroom = () => {
  const { firebaseUser: user } = useUserContext();
  const [loading, setLoading] = useState(true);

  const creaetNewUserInChatEngine = () => {
    const axios = require("axios");
    console.log("user:", user);
    const data = {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName || user.email,
      last_name: "",
      custom_json: { fav_game: "Candy Crush", high_score: 2002 },
    };
    const config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
        "PROJECT-ID": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
      },
      data,
    };
    axios(config)
      .then((response) => console.log(JSON.stringify(response.data)))
      .catch((e) => console.log("message:", e.message));
  };
  const getUserFromChatEngine = () => {
    setLoading(true);
    console.log("user:", user);

    let axios = require("axios");
    let config = {
      method: "get",
      headers: {
        "PRIVATE-KEY": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
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
    setLoading(false);
  };

  useEffect(() => {
    if (!user) return;
    getUserFromChatEngine();
  }, [user]);
  if (!user) {
    return <h2>Finding user info...</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {console.log("projectID", process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID)}
      {console.log("private", process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY)}
      <ChatEngine
        height="calc(100vh - 100px)"
        userName={user.email}
        userSecret={user.uid}
        projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      />
    </div>
  );
};

export default Chatroom;
