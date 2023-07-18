import React, { useState } from 'react';
import "../styles/DropdownMenu.css";

const options = [
  {value: "", text:"--- Select a phone provider ---"},
  {value:"AU", text:"AU", provider_id:3 },
  {value:"Docomo", text:"Docomo" , provider_id:2},
  {value:"GTN", text:"GTN", provider_id:9 },
  {value:"LINEMO", text:"LINEMO",provider_id:6 },
  {value:"Mobal", text:"Mobal", provider_id:1 },
  {value:"Rakuten", text:"Rakuten", provider_id:5 },
  {value:"Softbank", text:"Softbank", provider_id:4 },
  {value:"UQ", text:"UQ", provider_id:8 },
  {value:"Ymobile", text:"Ymobile", provider_id:7 },
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
    size:1
}

export default DropdownMenu;
