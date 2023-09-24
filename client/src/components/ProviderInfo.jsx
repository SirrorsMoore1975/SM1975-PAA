import React from 'react';
import { useNavigate } from "react-router-dom";
import ProviderNavbar from "../components/ProviderNavbar";
import Button from "../components/Button";
import "../styles/ProviderInfo.css";
// import providerJSON from "../data/provider.json"

const ProviderInfo = (props) => {
  const { provider, provider_id } = props
  const navigate = useNavigate();
  console.log("💔",provider);

  return (
    <>
    
    <div className='provider-hero-div'>
      <div className='provider-info'>
        <h1>{`[${provider_id}] ${provider.name}`}</h1>
        {/* <h2>{provider.name}</h2> */}
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
    <ProviderNavbar provider_id={provider_id}></ProviderNavbar>
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