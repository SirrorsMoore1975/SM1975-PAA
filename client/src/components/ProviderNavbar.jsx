import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import DropdownMenu from "./DropdownMenu";
import Button from './Button';
// import axios from 'axios';
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
    
    const [prefill, setPrefill ] = useState(parseInt(provider_id));
    useEffect(()=>{
        console.log(provider_id);
        console.log(prefill);
    },[prefill, provider_id])
    // const [providers, setProviders] = useState([]);
    // useEffect(()=>{
    //     const headers = {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    //     const fetchData = async () => {
    //         try{
    //            const response = await axios.get("/api/providers", {headers: headers})
    //            setProviders(...providers,response.data);
    //            console.log("ProviderNavbar.jsx:", providers);
    //         } catch(err) {
    //             console.log(err);
    //         }
            
    //     }
    //     fetchData();
    //     console.log(options);
    // },[]);
    
    // useEffect(()=>{
    //     // provider_id = parseInt(prefill, 10);
    //     let prefillNum = parseInt(prefill)
    //     if(isNaN(prefillNum)){
    //         setPrefill(0);
    //     } else {
    //         setPrefill(prefillNum);
    //     }
    //     console.log("🥰",prefillNum);
    // }, [prefillNum])


    const navigate = useNavigate();
    // const [provider, setProvider] = useState([{},[]]);

    // const fetchedCurrentProvider = async () => {
    //     const result = await axios.get(`/api/provider/${provider_id}`);
    //     setProvider(result.data)
    // }
    
    // const [currentView , setCurrentView] = useState('');
    const [goLeft, setGoLeft] = useState(prefill)
    const [goRight, setGoRight] = useState(prefill);

    const handleGoLeft = (e) => {
        e.preventDefault();
        setGoLeft(goLeft - 1)
        if(goLeft===0){
            setGoLeft(8);
        }
        console.log("😂", goLeft);
        setPrefill(goLeft);
        navigate(`/${options[goLeft].value}`);
    }
  
    const handleGoRight = (e) => {
        e.preventDefault();
        setGoRight(goRight + 1);
        if(goRight===9){
            setGoRight(1);
        }
        console.log("🤪",goRight);
        setPrefill(goRight);
        navigate(`/${options[goRight].value}`);
    }

    const handleDropdownMenu = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="provider-navbar">
                <div className="provider-pannel"><Button className="button" text="<" onClick={handleGoLeft} />{"Select: "}<Button className="button" text={(options[prefill].text) ? options[prefill].text : options[0].text} onClick={handleDropdownMenu}/><Button className="button" text=">" onClick={handleGoRight} />
                </div>
            </div>
        </>
    )
}
export default ProviderNavbar;