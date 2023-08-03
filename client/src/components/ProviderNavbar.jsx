import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import Button from './Button';
import axios from 'axios';
import "../styles/ProviderNavbar.css";
import providerJSON from "../data/provider.json";




const ProviderNavbar = ({provider_id}) => {
    // useEffect(() => {
    //     fetchedCurrentProvider();
    // },[]);
    const [prefill, setPrefill] = useState(provider_id ?? 0);
    const [providers, setProviders] = useState([]);
    useEffect(()=>{
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get("/api/providers/", {headers: headers})
        .then((response) => {
            setProviders(response.data);
            console.log("😎 ProviderNarbar.jsx:",response.data)
        })
        .catch((error) => {
            console.log("🤯 ProviderNavbar.jsx error:",error)
        })
    },[]);
    
    const options = [
        {provider_id: 0, value: "", text:"--- Select a phone provider ---"},
        ...providerJSON
      ];


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
                <div className="provider-pannel"><Button className="button" text="<" onClick={handleGoLeft} />{"Select: "}<Button text={currentView} /><Button className="button" text=">" onClick={handleGoRight} />
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;