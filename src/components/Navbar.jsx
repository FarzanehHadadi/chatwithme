import Styled from "styled-components";
import { AiOutlineWechat, AiOutlineLogout } from "react-icons/ai";
import { useUserContext } from "../contexts/userContext";
const Navbar = () => {
  const { isUserLoggedIn, logoutUser } = useUserContext();
  const userName = "name";
  // const isLoggedIn = true;
  return (
    <Wrapper>
      <div className="logo">
        <AiOutlineWechat className="logo-icon" />
        <h1>chat with me</h1>{" "}
      </div>
      {isUserLoggedIn && (
        <div className="nav-logout">
          <span>{userName}</span>
          <button className="logout-btn" onClick={logoutUser}>
            <AiOutlineLogout className="logout-icon" />
          </button>
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = Styled.nav`
max-height:60px;
 background: #F0F2F0;
 background: -webkit-linear-gradient(to right, #000C40, #F0F2F0); 
 background: linear-gradient(to right, #000C40, #F0F2F0); 
 padding:1rem;
 justify-content:space-between;
 display:flex;
 h1{
   font-size:1.5rem;
   color:#f5f0e4;
   font-family: 'Shadows Into Light', cursive;
   letter-spacing:3px;
   text-transform: capitalize;
   color: #E0EAFC;  
 }
 .logo{
   display:flex;
 }
.logo-icon{
  color: #E0EAFC;  
  font-size:2.2rem;
}
.nav-logout{
  color:#000C40;
  font-size:2rem;
  display:flex;
  span{
    text-transform:capitalize;
    padding-right:6px;
  }
  .logout-icon{
    align-self: center;
  }
  .logout-btn{
    font-size:2.5rem;
    background:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.5s ease;
    &:hover{
      opacity:0.6;
        transform:translateY(-5px);
    }
  }

}
}`;
export default Navbar;
