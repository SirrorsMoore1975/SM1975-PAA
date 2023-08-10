import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import DropdownMenu from "./DropdownMenu";
import Button from './Button';
// import axios from 'axios';
import "../styles/ProviderNavbar.css";
import providerJSON from "../data/provider.json";



const ProviderNavbar = ({provider_id}) => {

    const [options, setOptions] = useState([{provider_id:0,text:"nothing",value:"Mobal"}, ...providerJSON]);
    const [currentView, setCurrentView] = useState(parseInt(provider_id))
    
    // const fetchProvider = () => {
    //     try {
    //         if(options===[]){
    //             setOptions([{    
    //                 "provider_id": 0,
    //                 "value": "errorpage",
    //                 "text": "undefined"
    //             }]);
    //         }
    //     } catch(error) {
    //         console.error("Cannot fetch provider: ", error);
    //     } finally {
    //         console.log("fetch provider data is: ",options);
    //     }
        
    // }
    // useEffect(() => {
    //     fetchProvider();
    //     console.log("👹",options);
    // }, []);

    const [prefill, setPrefill ] = useState(provider_id ?? 1) ;
    useEffect(()=>{
        
        try{
            if(!prefill){
                console.error("provider_id has error: ",provider_id)
            } else {
                setPrefill(parseInt(provider_id));
            }
            console.log("🈲provider_id:",provider_id, typeof provider_id);
            console.log("😇prefill:",prefill);

        } catch (error){
            console.error(error);
        }
    },[]);
    
    const navigate = useNavigate();
  
    const [goLeft, setGoLeft] = useState(prefill)
    const [goRight, setGoRight] = useState(prefill);

    const handleGoLeft = (e) => {
        e.preventDefault();
        setGoLeft(goLeft - 1)
        if(goLeft===0){
            setGoLeft(8);
            setPrefill(8);
            navigate(`/${options[8].value}`)
        } else {
            setPrefill(goLeft);
            navigate(`/${options[goLeft].value}`);
        }
        console.log("goLeft- 😂", goLeft);
    }
  
    const handleGoRight = (e) => {
        e.preventDefault();
        setGoRight(goRight + 1);
        if(goRight===9){
            setGoRight(0);
            setPrefill(0);
            navigate(`/${options[0].value}`)
        } else {
            setPrefill(goRight);
            navigate(`/${options[goRight].value}`)
        }
        console.log("goRight- 🤪",goRight);
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
                <div className="provider-pannel"><Button className="button" text="<" onClick={handleGoLeft} />{"Select: "}<Button className="button" text={options[0].text} onClick={handleDropdownMenu}/><Button className="button" text=">" onClick={handleGoRight} />
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;