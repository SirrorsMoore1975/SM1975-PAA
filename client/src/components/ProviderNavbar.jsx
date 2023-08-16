import React, {useMemo} from "react";
import { useNavigate } from "react-router-dom";
// import DropdownMenu from "./DropdownMenu";
// import Button from './Button';

import providerJSON from "../data/provider.json";

import "../styles/ProviderNavbar.css";

const options = [
    {
        provider_id:0,
        value:"not available",
        text:"not available",
        path:"/errorpage"
    }, 
    ...providerJSON
];

const ProviderNavbar = ( props ) => {
    const  { provider_id } = props;
    // const result = { goLeft, currentView, goRight}
    const provider_data = useMemo(()=>{
        if(provider_id){
            return {
                "goLeft":provider_id - 1 === 0 ? options.length : provider_id - 1,
                "currentView" :provider_id * 1,
                "goRight": ( provider_id + 1 ) % options.length
            }
        } else {
            return undefined;
        }

    },[provider_id])
    // const [original , setOriginal ] = useState(0);
    // const [options, setOptions] = useState([]);
    console.log("😺",provider_id);
    console.log("provider_data:",provider_data);
    // const [currentView, setCurrentView] = useState(0 || provider_id);
    // useEffect((provider_id)=>{
    //     setCurrentView(provider_id)
    // },[])
    // console.log("🐶",currentView);
    // const [goLeft , setGoLeft ] = useState(provider_id -1 || 1);
    // const [goRight, setGoRight ] = useState(provider_id +1 || 2);
    // useEffect(()=>{
    //     fetchProvider();
    // }, [provider_id])
    // const fetchProvider = () => {
    //     // setOptions([...providerJSON]);
    //     setCurrentView(parseInt(provider_id));
    //     setGoLeft(currentView - 1);
    //     setGoRight(currentView + 1);
    // }

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
        // const result = goLeft === 0 ? options.length - 1 : goLeft;
        // setGoLeft(result);
        // const goLeft = currentView - 1 < 0 ? options.length - 1 : currentView -1;
        // setCurrentView(goLeft);
        // setInitialId(goLeft)
        navigate(options[provider_data?.goLeft].path);
        // console.log("goLeft- 😂", goLeft);
    };
  
    const handleGoRight = (e) => {
        e.preventDefault();
        // const result = (goRight + 1) % options.length;
        // const goRight = (currentView + 1) % options.length;
        // setGoRight(result);
        // setInitialId(goRight)
        // setCurrentView(goRight);
        navigate(options[provider_data?.goRight].path);
        // console.log("goRight- 🤪", goRight);
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