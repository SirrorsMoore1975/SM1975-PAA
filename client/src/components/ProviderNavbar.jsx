import React, {useMemo} from "react";
import { useNavigate } from "react-router-dom";
// import DropdownMenu from "./DropdownMenu";
// import Button from './Button';

import providerJSON from "../data/provider.json";

import "../styles/ProviderNavbar.css";

const options = [
    // {
    //     provider_id:0,
    //     value:"not available",
    //     text:"not available",
    //     path:"/errorpage"
    // }, 
    ...providerJSON
];

const ProviderNavbar = ( props ) => {
    const  { provider_id } = props;
    // const result = { goLeft, currentView, goRight}
    const provider_data = useMemo(()=>{
        if(provider_id){
            return {
                "goLeft":provider_id - 1 - 1 < 0 ? options.length - 1 : provider_id - 1 - 1,
                "currentView" :provider_id * 1 - 1,
                "goRight": ( provider_id -1 + 1 ) % (options.length - 1)
            }
        } else {
            return undefined;
        }

    },[provider_id])
    
    
    const navigate = useNavigate();
    
    
    const handleGoLeft = (e) => {
        e.preventDefault();
        navigate(options[provider_data?.goLeft].path);
    };
  
    const handleGoRight = (e) => {
        e.preventDefault();
        navigate(options[provider_data?.goRight].path);
    };
    
    const handleDropdownMenu = (e) => {
        e.preventDefault();
    };

    
   
    return (
        <>
            <div className="provider-navbar">
                <div className="provider-pannel">
                    <button 
                        className="button" 
                        onClick={handleGoLeft}>&lt;</button>
                Select: 
                <button 
                    className="button" 
                    onClick={handleDropdownMenu} 
    >
                    {options[provider_data?.currentView].text}  
                    </button>
                    <button 
                        className="button"
                        onClick={handleGoRight}>&gt;</button> 
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;