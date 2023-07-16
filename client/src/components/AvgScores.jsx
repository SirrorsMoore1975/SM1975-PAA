import React from "react";
import "./AvgScores.css"

/*
overall": 5.705882352941177,
        "ease_of_use": 3,
        "coverage": 3.1176470588235294,
        "price": 3.3529411764705883,
        "customer_service"
*/

const AvgScores = (props) => {
  const { scores } = props;
  return (
    <div className="scores-card"> 
      <p>Overall: {scores.overall}</p>
      <p>Ease of Use: {scores.ease_of_use}</p>
      <p>Coverage: {scores.coverage}</p>
      <p>Price: {scores.price}</p>
      <p>Customer Service: {scores.customer_service}</p>
    </div>
  )
};

AvgScores.defaultProps = {
  className: "",
  text: ""
};

export default AvgScores;