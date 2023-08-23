import React, { useState } from "react";
import {useParams} from "react-router-dom";

import axios from 'axios';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';

import Footer from '../components/Footer';
import DropdownMenu from '../components/DropdownMenu';
import Radio from '../components/Radio';

import ThankYou from '../pages/ThankYou';

import providerJSON from "../data/provider.json";
import "../styles/Form.css";

const createReviewData = (provider_id,reviewer_name,email,overall,ease_of_use,coverage,price,customer_service,customer_review) => {
  return {
    provider_id,
    reviewer_name,
    email,
    overall,
    ease_of_use,
    coverage,
    price,
    customer_service,
    customer_review
  }
}

const header = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const reviewData = 
{
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

const ReviewForm = () => {
  const { id } = useParams();
  
  const [overAllScore, getOverAllScore] = useState(0);
  const setOverAllScore = (score) =>{
      getOverAllScore(score);
      reviewData.overall = Number(score);
  }

  const [EOUScore, getEOUScore] = useState(0);
  const setEOUScore = (score) =>{
    getEOUScore(score);
    reviewData.ease_of_use = Number(score);
  }

  const [coverageScore, getCoverageScore] = useState(0);
  const setCoverageScore = (score) =>{
    getCoverageScore(score);
    reviewData.coverage = Number(score);
  }

  const [priceScore, getPriceScore] = useState(0);
  const setPriceScore = (score) =>{
    getPriceScore(score);
    reviewData.price = Number(score);
  }

  const [customerServiceScore, getCustomerServiceScore] = useState(0);
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
  reviewData.provider_id= Number(id);
  // const [, getCompName] = useState('');
  // const setCompName = (compName) => {
    
  //   getCompName(compName);
  //   reviewData.provider_id= Number(id);
    
  // }
    
  // COMMENT STATE
  const [comment, setComment] = useState('');

  const handleCommentInput = (event) => {
    const value = event.target.value;
    setComment(value);
    reviewData.customer_review = value;
  }

  
  // SERVER RESPONSE STATE
  const [serverResponse, setServerResponse] = useState('Pending');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const finalConfirmWindows = () => {
    return (
      <>
        <div className="confirm-window">
          <ul>
            <li>{`Provider: ${providerJSON[id - 1].text}`}</li>
            <li>{`Reviewer name: ${nickname}`}</li>
            <li>{`Email: ${email}`}</li>
            <li>{`Overall score: ${overAllScore}`}</li>
            <li>{`Ease of use score: ${EOUScore}`}</li>
            <li>{`Coverage score: ${coverageScore}`}</li>
            <li>{`Price score: ${priceScore}`}</li>
            <li>{`Customer service score: ${customerServiceScore}`}</li>
          </ul>
          <div className="confirm-panel">
            <span>
              <button>{`Cancel`}</button>
              </span>
            <span>
              <button>{`Confirm`}</button>
              </span>
          </div>
        </div>
      </>
    )
  }

  // HANDLER FUNCTION
  const handleSubmission = async (event) => {
    event.preventDefault();
    // Check name, email and textarea before allowing the submission of the review to be written into the database
    // They cannot be empty
    // email cannot be repeated (may required a new api to handle this request and get response, true should warn this email been use for this review already - might required feature such as login user with password to edit comment in the future; false should check the next item)
    // textarea: 1.) must not be empty; 2.) must have at least 10 characters long
    
    try {
      
      const response = await axios.post('/api/review', reviewData, header)
      const responseData = await response.data
        const usedWithProvider = responseData?.usedWithProvider;
        const message = responseData?.message;
        if(!usedWithProvider){
          setIsSubmitted(!isSubmitted);
          setAttemptedSubmit(false);
          setAlertMessage(null);
          setServerResponse(message);
        } 
      
    } catch (error){
      const response = error.response.data;
      const responseMessage = response.message
      setAttemptedSubmit(true);
      setAlertMessage(responseMessage);
      console.error(error);
    }
  };

  return (
    <>  
    <div>  
      {
        isSubmitted
        ? (
          <div>
          <ThankYou text={serverResponse} />
          </div>
        )

        : (
        <div className="main">
            <Navbar 
            /* className="navbar" */
            text="We appreciate your reviews"/>
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
                {attemptedSubmit ? <><div className="alert-submited-email">{alertMessage}</div></> : null}
                
                <div>

                {`You are currently reviewing:`} <br />
                <span className="provider-highlight">{`${providerJSON[id - 1].text}`}</span>
                </div>
                  
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
    </>
  );
}

export default ReviewForm;