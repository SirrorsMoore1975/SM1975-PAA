import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

const ThankYou = ({text}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        handleAutomaticRedirect();
    },);

    const handleAutomaticRedirect = () => {
        setTimeout(()=>{ navigate('/') }, 10000);
    }

    return (
        <div className="thanks">    
            <Header className="header" text="Thank you for your feedback!" secondary_text={text}/>
            <Button className="button submit" text="Home" onClick={() => navigate('/')} />
            <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
          </div>
    )
}

export default ThankYou;