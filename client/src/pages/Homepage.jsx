import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../styles/Homepage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';


const Homepage = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders();
  },[])

  async function getProviders() {
    const fetchedProviders = await axios.get('/api/providers');
    setProviders(fetchedProviders.data);
  }

  const navigate = useNavigate();

  return (
    <>
      <Header 
        className="header" 
        text="Need a Phone Provider?" 
        secondary_text="Check these out!">
      </Header>

      <div className="grid-container">
        {
          providers.map((provider) => {
            return (
              <Card 
                cardName={provider.name}
                img_url={provider.img_url}
                averageScore={provider.overall}
                english_support={provider.english_support}
                site_url={provider.site_url}
                description={provider.description}
                onClick={() => navigate('/' + provider.name)}
                buttonClassName="button"
              />
            )
          })
        }
      </div>
      <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
    </>
  );
};

export default Homepage;