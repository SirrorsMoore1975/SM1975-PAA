import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import ProviderInfo from "../components/ProviderInfo";
import AvgScores from "../components/AvgScores";
import Button from '../components/Button';
import Footer from "../components/Footer";
import "./Provider.css";


const Mobal = () => {
  const navigate = useNavigate();

  const [provider, setProvider] = useState([{},[]]);

  useEffect(() => {
    getProvider();
  },)

  async function getProvider() {
    // for a general provider page. replace the path with axios.get(`/api/provider/${provider_id}`)
    const fetchedProvider = await axios.get('/api/provider/1'); 
    setProvider(fetchedProvider.data)
  }
  return (
    <div>
      <ProviderInfo provider={provider[0]} />
      <div className="main-content">
        <div>
          <AvgScores scores={provider[0]} />
          <span>Have you used this company?</span>
          <Button className="button review" text="Write a Review" onClick={() => navigate('/Form')} />
        </div>
        <ReviewCard reviews={provider[1]}></ReviewCard>
      </div>
      <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
    </div>
  );
}

export default Mobal;