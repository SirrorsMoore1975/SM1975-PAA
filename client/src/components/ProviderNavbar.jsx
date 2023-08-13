import React, {useState, useEffect, useMemo, useCallback} from "react";
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
const ProviderNavbar = ({ provider_id }) => {
    // const [options, setOptions] = useState([]);
    
    const [currentView, setCurrentView] = useState(null || 0);
    const [goLeft , setGoLeft ] = useState(null || 0);
    const [goRight, setGoRight ] = useState(null || 0);
    useEffect(()=>{
        fetchProvider();
    }, [provider_id])
    const fetchProvider = () => {
        // setOptions([...providerJSON]);
        setCurrentView(parseInt(provider_id));
        setGoLeft(currentView - 1);
        setGoRight(currentView + 1);
    }

    // const initialID = parseInt(provider_id) ? parseInt(provider_id) : null;
    const navigate = useNavigate();
    // const [currentView, setCurrentView] = useState(provider_id || initialID);
    // if (isNaN(currentView)){
    //     // navigate(options[0].path);
    //     setCurrentView(initialID);
    // }
    
    // const [currentText, setCurrentText] = useState(options[currentView].text);
    
    // const [goLeft, setGoLeft] = useState(currentView - 1);
    // const [goRight, setGoRight] = useState(currentView + 1);
   
    // useEffect(()=>{
    //     console.log("🤣", provider_id);
    
        
    // },[provider_id]);
    
    const handleGoLeft = (e) => {
        e.preventDefault();
        setGoLeft(goLeft < 0 ? options.length - 1 : goLeft)
        // const goLeft = currentView - 1 < 0 ? options.length - 1 : currentView -1;
        // setCurrentView(goLeft);
        // setInitialId(goLeft)
        navigate(options[goLeft].path);
        // console.log("goLeft- 😂", goLeft);
    };
  
    const handleGoRight = (e) => {
        e.preventDefault();
        // const goRight = (currentView + 1) % options.length;
        setGoRight((goRight) % options.length);
        // setInitialId(goRight)
        // setCurrentView(goRight);
        navigate(options[goRight].path);
        // console.log("goRight- 🤪", goRight);
    };

    const handleDropdownMenu = (e) => {
        e.preventDefault();
    };

    // const handleCurrentViewChange = () => {

    // }
    // useEffect(()=> {
    //     changeRightValue();
    // },[goLeft])
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
                {options[0].text}  
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