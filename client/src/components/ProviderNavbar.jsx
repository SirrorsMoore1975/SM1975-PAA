import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import Button from './Button';
import "../styles/ProviderNavbar.css";
import provider from "../data/provider.json";

const ProviderNavbar = () => {
    const navigate = useNavigate();
    const [currentView , setCurrentView] = useState('');
    const [goLeft, setGoLeft] = useState('')
    const [goRight, setGoRight] = useState('');
  
    const handleGoLeft = () => {
        if(goLeft===0){
            
        }
    }
  
    const handleGoRight = () => {
        if(goRight===9){
            
        }
    }
    return (
        <>
            <div className="provider-navbar">
                <div className="provider-pannel"><Button className="button" text="<" onClick={handleGoLeft} />{"Select: "}<Button className="button" text=">" onClick={handleGoRight} />
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;