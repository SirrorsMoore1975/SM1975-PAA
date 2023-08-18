import React, {useState, useEffect, useMemo, useRef} from "react";
import { useNavigate } from "react-router-dom";

import providerJSON from "../data/provider.json";

import "../styles/ProviderNavbar.css";

const options = [
    /**
     * providerJSON has the following key:
     * {
     *      provider_id:0,
     *      value:"not available",
     *      text:"not available",
     *      path:"/errorpage"
     * }
     */
    ...providerJSON
];

const ProviderNavbar = ( props ) => {
    const  { provider_id } = props;
    const provider_data = useMemo(()=>{
        if(provider_id){
            return {
                "goLeft":provider_id - 2 < 0 ? options.length - 1 : provider_id - 2,
                "currentView" :provider_id - 1,
                "goRight": ( provider_id ) % (options.length)
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
    
    const dropdownRef = useRef(null); 
    const [isActive, setIsActive] = useState(false);
    
    const handleDropdownMenu = (e) => {
        e.preventDefault();
        setIsActive(!isActive)
    };

    const Dropdown = () => {
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
                                    <button className="dropdown-button" onClick={(e)=>{
                                        e.preventDefault();
                                        setIsActive(!isActive);
                                        if(provider_id !== provider.provider_id)
                                        navigate(`${provider.path}`);}}>
                                    {provider.text} 
                                    </button>
                            </li>   
                        ))}
                    </ul>
                </nav>
                </div>
            </div>
        )
    }

    useEffect(()=>{
        const pageClickEvent = (eve) =>{
            console.log(eve);
            if(!dropdownRef.current && !dropdownRef.current.contains(eve.target) && isActive){
                setIsActive(!isActive)
            }
        }
        if(isActive){
            document.addEventListener('click', pageClickEvent);
        }
        return () => {
            document.removeEventListener('click',pageClickEvent)
        }
    },[isActive])

    return (
        <>
            <div className="provider-navbar">
                <div className="provider-pannel">
                    <span>
                        <button 
                            className="button" 
                            onClick={handleGoLeft}>&lt;</button>
                    </span>
                    <span>
                        Select: 
                        <button 
                            className="dropdown" 
                            onClick={handleDropdownMenu} 
                        >
                        <span>
                            {`${options[provider_data?.currentView].text}`}
                        </span>
                        </button>
                        <Dropdown />
                    </span>
                    <span>
                        <button 
                            className="button"
                            onClick={handleGoRight}>&gt;</button> 
                    </span>
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;