import React, { useState } from "react";

import axios from 'axios';

import ThankYou from "../pages/ThankYou";
import "../styles/Form.css";
import ReviewForm from "../pages/ReviewForm"

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