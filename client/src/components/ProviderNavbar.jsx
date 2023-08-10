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
        value:"not available"
    }, 
    ...providerJSON
];
const ProviderNavbar = ({provider_id}) => {
    const navigate = useNavigate();
    const [currentView, setCurrentView] = useState(parseInt(provider_id) ?? 0);
    const [currentText, setCurrentText] = useState(options[currentView]["text"]);
    const [goLeft, setGoLeft] = useState(currentView -1);
    const [goRight, setGoRight] = useState(currentView + 1);
    // const fetchData = () => {
    //     if(provider_id){
    //         setCurrentText(options[currentView].text);
    //     } else {
    //         setCurrentText(options[0].text);
    //     }
    // }
    useEffect(()=>{
        console.log("🤣",provider_id);
        // fetchData();
    },[])
    
    const handleGoLeft = (e) => {
        e.preventDefault();
        
        if(goLeft===0){
            setGoLeft(9);
            setCurrentView(9);
            navigate(`/${options[9].value}`)
        } else {
            setGoLeft(goLeft);
            setCurrentView(goLeft);
            navigate(`/${options[goLeft].value}`);
        }
        console.log("goLeft- 😂", goLeft);
    }
  
    const handleGoRight = (e) => {
        e.preventDefault();
        
        if(goRight===9){
            setGoLeft(8);
            setCurrentView(9);
            setGoRight(1);
            navigate(`/${options[1].value}`)
        } else {
            setGoLeft(currentView - 1)
            setCurrentView(goRight);
            setGoRight(currentView + 1);
            navigate(`/${options[goRight].value}`)
        }
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