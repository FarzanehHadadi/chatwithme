import React, { useState } from "react";
import Styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import Modal from "../components/Modal";
import auth from "../components/Firebase";
import firebase from "firebase/app";

const Login = () => {
  const [modal, setModal] = useState({ show: false, text: "" });

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });
  const githubProvider = new firebase.auth.GithubAuthProvider();
  githubProvider.setCustomParameters({
    prompt: "select_account",
    allow_signup: "true",
  });
  const showModal = (text) => {
    setModal({ text, show: true });
  };
  const hideModal = () => {
    setModal({ ...modal, show: false });
  };

  return (
    <Wrapper>
      <div className="login-form-container">
        {modal?.show && <Modal text={modal?.text} hideModal={hideModal} />}
        <h1>
          join us in <span className="title">chat with me</span>
        </h1>
        <button
          className="login-btn"
          onClick={() => {
            auth.signInWithRedirect(googleProvider).catch((e) => {
              showModal(e.message);
            });
          }}
        >
          <FcGoogle className="login-icon" /> sign in with google
        </button>
        <button
          className="login-btn"
          onClick={() => {
            auth.signInWithRedirect(githubProvider).catch((e) => {
              showModal(e.message);
            });
          }}
        >
          <FiGithub className="login-icon" /> sign in with github
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = Styled.section`
height: calc(100vh - 60px);
background: #DAE2F8;  
background: -webkit-linear-gradient(to right, #e0c3c3, #DAE2F8); 
background: linear-gradient(to top, #e0c3c3, #DAE2F8);
display:grid;
place-items:center;
text-transform: capitalize;
.login-form-container{
max-width:300px;
  border-radius:10px;
  padding:1rem 1.5rem;
  background:#DAE2F8;
}
.title{
  font-style: italic;
  font-weight: bold;
  font-size:1.2rem;
  color:#ba7d04;
}
.login-btn{
  display:block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius:10px;
  background: #000C40;
  color: #f0f2f0;
  border:#000C40 solid 2px;
  text-transform: capitalize;      cursor: pointer;
  transition: all 0.5s ease;
  letter-spacing:0.5px;
  &:hover{
    color:#000C40;
    background:#f0f2f0;
    .login-icon{
      color:#000C40!important;}
  }
}
.login-icon{
  color:white!important;
}
`;
export default Login;
