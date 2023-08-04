import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import Button from './Button';
import axios from 'axios';
import "../styles/ProviderNavbar.css";
import providerJSON from "../data/provider.json";

const options = [
    {
        "provider_id": 0,
        "value": "",
        "text": ""
    },
    ...providerJSON
];

const ProviderNavbar = ({provider_id}) => {
    // useEffect(() => {
    //     fetchedCurrentProvider();
    // },[]);
    
    
    const [prefill, setPrefill] = useState(Number(provider_id) ?? 0);
    const [providers, setProviders] = useState([]);
    useEffect(()=>{
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const fetchData = async () => {
            try{
               const response = await axios.get("/api/providers", {headers: headers})
               setProviders(...providers,response.data);
               console.log("ProviderNavbar.jsx:", providers);
            } catch(err) {
                console.log(err);
            }
            
        }
        fetchData();
        console.log("😂",prefill);
    },[]);
    
    


    const navigate = useNavigate();
    // const [provider, setProvider] = useState([{},[]]);

    // const fetchedCurrentProvider = async () => {
    //     const result = await axios.get(`/api/provider/${provider_id}`);
    //     setProvider(result.data)
    // }
    
    const [currentView , setCurrentView] = useState('');
    const [goLeft, setGoLeft] = useState(provider_id - 1)
    const [goRight, setGoRight] = useState(provider_id + 1);

  
    const handleGoLeft = () => {
        if(goLeft===0){
            setGoLeft(8)
        }
    }
  
    const handleGoRight = () => {
        if(goRight===9){
            setGoRight(1)
        }
    }

    const handleDropdownMenu = () => {

    }
    return (
        <>
            <div className="provider-navbar">
                <div className="provider-pannel"><Button className="button" text="<" onClick={handleGoLeft} />{"Select: "}<Button text={options[prefill].text} onClick={handleDropdownMenu}/><Button className="button" text=">" onClick={handleGoRight} />
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;