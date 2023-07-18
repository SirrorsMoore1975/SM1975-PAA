import React from "react";
import "../styles/Header.css"

const Header = (props) => {
  const { className, text, secondary_text } = props;
  return (
    <div className={ className }>
      <h1>{ text }</h1>
      <h2> { secondary_text }</h2>
    </div>
  )
};

Header.defaultProps = {
  className: "",
  text: "",
  secondary_text: "",
};

export default Header;