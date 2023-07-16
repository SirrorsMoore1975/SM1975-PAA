import React from 'react';
import './Card.css'

const Card = (props) => {
  const { description, divClassName, onClick, onChange, cardName, imgClassName, img_url, altValue, averageScoreClassName ,averageScore, buttonClassName  } = props;
  /*
  You can console.log(className) to see what it returns
  You can also console.log(props) to see what object passed
  
  */
  //console.log("😀",value);
  //console.log("😍",props);
  return (
    <>
      <div
        className="card">
        
        <h2>{ cardName }</h2>
        <span className= {averageScoreClassName} > Average Score:{ averageScore }</span>
        <img className = {imgClassName}
          src={img_url} 
          alt={altValue}
        />
        <p>{description}</p>
        <button className = {buttonClassName} onClick = {onClick} onChange = {onChange}>Details</button>
      </div>
    </>
  );
};

Card.defaultProps = {
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

  export default Card;
  