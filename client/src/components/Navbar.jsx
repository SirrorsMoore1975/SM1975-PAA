import React from "react";
import { useNavigate } from "react-router-dom";
import Button from './Button';
import "./Navbar.css"

const Navbar = (props) => {
  const { className, text } = props;
  const navigate = useNavigate();
  
  return (
    <div className={className}>
      <Button className="button" text="Home" onClick={() => navigate('/')}/>
      <h1>{ text }</h1>      
    </div>
  )
};

Navbar.defaultProps = {
  className: "",
  text: "",
};

export default Navbar;