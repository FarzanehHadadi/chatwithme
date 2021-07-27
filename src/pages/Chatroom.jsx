import React from "react";
import { ChatEngine } from "react-chat-engine";
import { useUserContext } from "../contexts/userContext";
const Chatroom = () => {
  const { firebaseUser: user } = useUserContext();

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
