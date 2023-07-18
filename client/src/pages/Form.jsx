import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DropdownMenu from '../components/DropdownMenu';
import Radio from '../components/Radio';
import "../styles/Form.css";

const reviewData = {
  provider_id: "", 
  reviewer_name: "", 
  email: "", 
  overall: 0, 
  ease_of_use: 0, 
  coverage: 0, 
  price: 0, 
  customer_service: 0, 
  customer_review: ""
};

const Form = () => {
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [, getOverAllScore] = useState(0);
  const setOverAllScore = (score) =>{
      getOverAllScore(score);
      reviewData.overall = Number(score);
  }

  const [, getEOUScore] = useState(0);
  const setEOUScore = (score) =>{
    getEOUScore(score);
    reviewData.ease_of_use = Number(score);
  }

  const [, getCoverageScore] = useState(0);
  const setCoverageScore = (score) =>{
    getCoverageScore(score);
    reviewData.coverage = Number(score);
  }

  const [, getPriceScore] = useState(0);
  const setPriceScore = (score) =>{
    getPriceScore(score);
    reviewData.price = Number(score);
  }

  const [, getCustomerServiceScore] = useState(0);
  const setCustomerServiceScore = (score) =>{
    getCustomerServiceScore(score);
    reviewData.customer_service= Number(score);
  }
  
  // NICKNAME STATE
  const [nickname, setNickname] = useState('');

  const handleNicknameInput = (event) => {
    const value = event.target.value;
    setNickname(value);
    reviewData.reviewer_name = value;
  }

  // EMAIL STATE
  const [email, setEmail] = useState('');

  const handleEmailInput = (event) => {
    const value = event.target.value;
    setEmail(value);
    reviewData.email = value;
  }

  // DROP DOWN MENU STATE
  const [, getCompName] = useState('');
  const setCompName = (compName) => {
    
    getCompName(compName);
    reviewData.provider_id = Number(compName);
    
  }
    
  // COMMENT STATE
  const [comment, setComment] = useState('');

  const handleCommentInput = (event) => {
    const value = event.target.value;
    setComment(value);
    reviewData.customer_review = value;
  }

  // SERVER RESPONSE STATE
  const [serverResponse, setServerResponse] = useState('Pending');

  // HANDLER FUNCTION
  const handleSubmission = async (event) => {
    event.preventDefault();
    setIsSubmitted(!isSubmitted);
    const response = await axios.post('/api/review', reviewData)
      .catch((error) => console.log(error));  
    setServerResponse(response.data);
  };

  return (
    <div>  
      {
        isSubmitted
        ? (
          <div className="thanks">    
            <Header className="header" text="Thank you for your feedback!" secondary_text={serverResponse}/>
            <Button className="button submit" text="Home" onClick={() => navigate('/')} />
            <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
          </div>
        )

        : (
          <div className="main">
            <Navbar className="navbar" text="We appreciate your reviews"/>
            <div className="wrapper">
              <div className="scores-div">
                <Radio 
                  className="radio"
                  radioName="Overall"
                  scoreSetter={setOverAllScore} 
                />
                <br />
                <Radio 
                  className="radio"
                  radioName="Ease Of Use"
                  scoreSetter={setEOUScore}
                />
                
                <Radio 
                  className="radio"
                  radioName="Coverage"
                  scoreSetter={setCoverageScore}
                />
                
                <Radio
                  className="radio" 
                  radioName="Price"
                  scoreSetter={setPriceScore}
                />
                
                <Radio
                  className="radio" 
                  radioName="Customer Service"
                  scoreSetter={setCustomerServiceScore}
                />
              </div>
              <div className="inputs">
                <Input
                  className="input" 
                  placeholder="Nickname"
                  value ={ nickname } 
                  onChange={ handleNicknameInput }
                />

                <Input
                  className="input"  
                  placeholder="Email" 
                  value={ email }
                  onChange={ handleEmailInput }
                />

                {<DropdownMenu
                  className="menu"  
                  setProviderId={setCompName}/>}
                
              </div>
            </div>
                <textarea 
                  name="" 
                  id="" 
                  cols="60" 
                  rows="10" 
                  placeholder="Type your review here!"
                  value={ comment }
                  onChange={ handleCommentInput }
                />
            <Button
            className="button submit"
              text="Submit"
              onClick = { handleSubmission }
            />
            <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
        </div>
        )
      }
    </div>
  );
}

export default Form;