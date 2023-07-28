import React, { useState } from "react";

import axios from 'axios';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';

import Footer from '../components/Footer';
import DropdownMenu from '../components/DropdownMenu';
import Radio from '../components/Radio';
import ThankYou from "../pages/ThankYou";
import "../styles/Form.css";
import ReviewCard from "../pages/ReviewForm"

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
          <div>
          <ThankYou text={serverResponse} />
          </div>
        )

        : (
          <div>
          <ReviewForm />
          </div>
          
        )
      }
    </div>
  );
}

export default Form;