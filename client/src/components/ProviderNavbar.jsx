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
        "value": "errorpage",
        "text": "undefined"
    },
    ...providerJSON
];

const ProviderNavbar = ({provider_id}) => {
    // useEffect(() => {
    //     fetchedCurrentProvider();
    // },[]);
    
    const [prefill, setPrefill ] = useState(0);
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
        console.log(options);
    },[]);
    
    useEffect(()=>{
        provider_id = parseInt(provider_id, 10);
        if(isNaN(provider_id)){
            setPrefill(0);
        } else {
            setPrefill(provider_id);
        }
        console.log("🥰",prefill);
    }, [prefill])


    const navigate = useNavigate();
    // const [provider, setProvider] = useState([{},[]]);

    // const fetchedCurrentProvider = async () => {
    //     const result = await axios.get(`/api/provider/${provider_id}`);
    //     setProvider(result.data)
    // }
    
    const [currentView , setCurrentView] = useState('');
    const [goLeft, setGoLeft] = useState(provider_id - 1)
    const [goRight, setGoRight] = useState(provider_id + 1);

    const handleGoLeft = (e) => {
        e.preventDefault();
        if(goLeft===0){
            setGoLeft(8);
        }
        console.log("😂", goLeft);
        navigate(`/${options[goLeft].value}`);
    }
  
    const handleGoRight = (e) => {
        e.preventDefault();
        if(goRight===9){
            setGoRight(1);
        }
        console.log("🤪",goRight);
        navigate(`/${options[goRight].value}`);
    }

    const handleDropdownMenu = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="provider-navbar">
                <div className="provider-pannel"><Button className="button" text="<" onClick={handleGoLeft} />{"Select: "}<Button className="button" text={options[prefill].text} onClick={handleDropdownMenu}/><Button className="button" text=">" onClick={handleGoRight} />
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;