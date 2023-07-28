import React, { useState } from 'react';
import "../styles/DropdownMenu.css";
import provider from "../data/provider.json";

const options = [
  {value: "", text:"--- Select a phone provider ---"},
  ...provider
];

function DropdownMenu ( props ) {
  const { className, htmlFor, labelName, selectName, selectid, required, disabled, size, setProviderId } = props;


  const [selected, setSelected ] = useState(options[0].value);

  const handleChange = (event) => {
  
  setSelected(event.target.value);
  let company=event.target.value;
  console.log("company:",company);
  setProviderId(company);
  
  };
  return (
    <>
      <div>
      <label htmlFor={htmlFor}>{labelName}</label>
        <select
          className={ className } 
          value={selected} 
          onChange={handleChange} 
          name={selectName}
          id={selectid}
          required={required}
          disabled={disabled}
          size={size}
        >
        {options.map((option, index) => (
          <option 
            key={index}
            value={option.provider_id} 
            provider_id={option.provider_id}>
            { option.text }
          </option> 
            ))}
        </select>
      </div>
    </>
  );
};



DropdownMenu.defaultProps ={
    className: "",
    htmlFor: "",
    labelName:"",
    selectName:"", 
    selectid:"", 
    required:"",
    disabled:"",
    size:1,
    prefill:0
}

export default DropdownMenu;
