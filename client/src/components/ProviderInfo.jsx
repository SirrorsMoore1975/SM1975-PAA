import React from 'react';
import { useNavigate } from "react-router-dom";
import ProviderNavbar from "../components/ProviderNavbar";
import Button from "../components/Button";
import "../styles/ProviderInfo.css";

const ProviderInfo = (props) => {
  const { provider } = props
  const navigate = useNavigate();

  return (
    <>
    
    <div className='provider-hero-div'>
      <div className='provider-info'>
      
        <h2>{provider.name}</h2>
        <p>English Support: {provider.english_support === true ? '✅' : '❌'}</p>
        <p>{provider.description}</p>
        <a href={provider.site_url}>Click here for the provider website.</a>
      </div>
      <div className="hero-right">
        <Button className="button" text="Home" onClick={() => navigate('/')}/>
        <div className="provider-logo">
          <img src={provider.img_url} alt="" />
        </div>
      </div>
    </div>
    <ProviderNavbar></ProviderNavbar>
    </>
  )
}

ProviderInfo.defaultProps = {
  divClassName: "",
  onClick: () => {},
  onChange: () => {},
  imgClassName: "",
  img_url: "",
  altValue: "",
  averageScoreClassName: "",
  averageScore: "",
  buttonClassName: "",
};

export default ProviderInfo;