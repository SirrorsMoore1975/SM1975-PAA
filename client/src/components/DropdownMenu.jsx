import React, { useState, useRef } from 'react';
import "../styles/DropdownMenu.css";
import provider from "../data/provider.json";

/*
const Dropdown = ({ 
  options, 
  provider_id, 
  menuClassName="menu-container", 
  dropdownRef,
  navClassname="menu", 
  activeClassName="active", 
  buttonClassName="dropdown-button"
  }) => {
    const dropdownRef = useRef(null); 
    const [isActive, setIsActive] = useState(false);
    
    const handleDropdownMenu = (e) => {
        e.preventDefault();
        setIsActive(!isActive)
    };
  return (
    <div>
        <div className="menu-container">
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
                {options.map((provider, index) => (
                    <li 
                        key={index}
                        value={provider.provider_id}
                        >
                            <button className={"dropdown-button "} onClick={(e)=>{
                                e.preventDefault();
                                setIsActive(!isActive);
                                if(provider_id !== provider.provider_id)
                                navigate(`${provider.path}`);}}>
                                    <span>
                            {provider.text} 
                                    </span>
                            </button>
                    </li>   
                ))}
            </ul>
        </nav>
        </div>
    </div>
)

}

*/



/*

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


*/

export default DropdownMenu;