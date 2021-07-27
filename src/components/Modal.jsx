import { useEffect } from "react";
import Styled from "styled-components";
const Modal = ({ text, hideModal }) => {
  useEffect(() => {
    setTimeout(() => {
      hideModal();
    }, 5000);
  }, [text]);
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  );
};
const Wrapper = Styled.div`
text-align:center;
background:#f0f2f0;
padding:0.3rem;
margin:0.5rem 0 1rem 0;
p{
    max-width:80%;
    margin 0 auto;
    color:#bd2f00;
    
}


`;
export default Modal;
