import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import ProviderInfo from "../components/ProviderInfo";
import AvgScores from "../components/AvgScores";
import Footer from "../components/Footer";
import Button from '../components/Button';
import "../styles/Provider.css";


const Provider = ({ provider_id }) => {
  const navigate = useNavigate();

  const [provider, setProvider] = useState([{},[]]);

  useEffect(() => {
    getProvider();
    console.log(provider);
  },)

  async function getProvider() {
    // for a general provider page. replace the path with axios.get(`/api/provider/${provider_id}`)
    const header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    try {
      const fetchedProvider = await axios.get(`/api/provider/${provider_id}`, header); 
      setProvider(fetchedProvider.data);

    } catch (err) {
      console.error("🤢", err);
    }
    
  }
  console.log("😒",provider, provider[0], provider[1]);
  return (
    <div>
      
      <ProviderInfo provider={provider[0]} provider_id={provider_id}/>
      
      <div className="main-content">
        <div>
          <AvgScores scores={provider[0]} />
          <span>Have you used this company?</span>
          <Button className="button review" text="Write a Review" onClick={() => navigate('/reviewform')} />
        </div>
        <ReviewCard reviews={provider[1]}></ReviewCard>
      </div>
      <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
    </div>
  );
}

export default Provider;