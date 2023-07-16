import React, {useState} from 'react';
import "./Radio.css";

const inputs = [];

for(let i =0; i<= 10; i++){
  inputs.push({type:"radio", value: i.toString()})
}

const Radio = ( props ) => {
  const { className, label, radioName, scoreSetter } = props;
  const [selectedRadioButton, setSelectedRadioButton] = useState('0');

  const isRadioSelected = (value) => { 
    return selectedRadioButton === value;
  }

  const handleRadioSelect = (event) => {
    setSelectedRadioButton(event.target.value)
    let score = event.target.value;
    scoreSetter(score);
  }
    return (
      <><div>{radioName}: {selectedRadioButton}</div>
        <div className={ className } >
            {
            inputs.map((input, index) => {
                return (
                <>
                  <span className={className}>
                    {input.value}
                    <br />
                    <label htmlFor={label} 
                    key={index}>
                        
                        <input 
                        id={label}
                    type={input.type}
                    name={radioName}
                    value={input.value}
                    checked={isRadioSelected(input.value)}
                    onChange={handleRadioSelect}
                    >
                    </input>
                    </label>
                    </span>
                    </>
                )
            })
            
            }
            </div>
        </>
    )
}

Radio.defaultProps = {
    className:"",
    label:"",
    radioName:"",
    onClick: ()=> {},
    
    scoreSetter:()=>{}
}

export default Radio;

