import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import DropdownMenu from "./DropdownMenu";
import Button from './Button';
// import axios from 'axios';
import "../styles/ProviderNavbar.css";
import providerJSON from "../data/provider.json";

const options = [
    {
        provider_id:0,
        text:"not available",
        value:"not available",
        path:"/errorpage"
    }, 
    ...providerJSON
];
const ProviderNavbar = ({provider_id}) => {
    const navigate = useNavigate();
    // const [currentView, setCurrentView] = useState(parseInt(provider_id) || 1);
    const [currentText, setCurrentText] = useState(options[parseInt(provider_id)].text);
    const [goLeft, setGoLeft] = useState(parseInt(provider_id) - 1 || 1);
    const [goRight, setGoRight] = useState(parseInt(provider_id) + 1 || 1);
   
    // useEffect(()=>{
    //     console.log("🤣",provider_id);
    //     // fetchData();
    // },[])
    
    const handleGoLeft = (e) => {
        e.preventDefault();
        if(goLeft===0){
            setGoLeft(9);
        } 
        navigate(`${options[goLeft].path}`);
        console.log("goLeft- 😂", goLeft);
    }
  
    const handleGoRight = (e) => {
        e.preventDefault();
        if(goRight===9){
            setGoRight(1);    
        } 
        navigate(`${options[goRight].path}`);
        console.log("goRight- 🤪", goRight);
    }

    const handleDropdownMenu = (e) => {
        e.preventDefault();
    }
    // const handleCurrentViewChange = () => {

    // }
    // useEffect(()=> {
    //     changeRightValue();
    // },[goLeft])
    return (
        <>
            <div className="provider-navbar">
                <div className="provider-pannel"><Button className="button" text="<" onClick={handleGoLeft} />{"Select: "}<Button className="button" text={currentText} onClick={handleDropdownMenu}/><Button className="button" text=">" onClick={handleGoRight} />
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;