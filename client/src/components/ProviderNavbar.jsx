import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from './Button';

const ProviderNavbar = () => {
    const navigate = useNavigate();
    const [currentView , setCurrentView] = useState('');
    const [goLeft, setGoLeft] = useState('')
    const [goRight, setGoRight] = useState('');
  
    const handleGoLeft = () => {
  
    }
  
    const handleGoRight = () => {
  
    }
    return (
        <>
             <div className="navigation">
<Button className="button" text="Left" onClick={handleGoLeft} />
<Button className="button" text="Right" onClick={handleGoRight} />
      </div>
        </>
    )
}
export default ProviderNavbar;