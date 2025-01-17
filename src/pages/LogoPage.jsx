import React from 'react'
import "../styles/LogoPage.css"
import logo from "../assets/text.png"
import { useNavigate } from 'react-router-dom';

const LogoPage = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className='logo-img'>
        <img src={logo} alt="" onClick={handleLogoClick}/>
      </div>
    </>
  )
}

export default LogoPage