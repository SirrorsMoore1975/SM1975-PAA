import React from "react";
import "../styles/Input.css";

const Input = (props) => {
  const { className, label, labelName, placeholder, value, onChange } = props;
  
  return (
    <div>
      <label htmlFor={label}>{labelName}</label>
      <input
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  )
}

Input.defaultProps = {
  className: "",
  label: "",
  labelName: "",
  placeholder: "",
  value: "",
  onChange: () => {},
};

export default Input;