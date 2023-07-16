import React from "react";
import "./Button.css";

const Button = (props) => {
  const { className, onClick, text } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      >{ text }</button>
  );
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  text: "",
};

export default Button;