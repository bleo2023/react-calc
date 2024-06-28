import React, { useEffect, useState } from "react";
import './App.css'

const App = () => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

const Calculator = () => {
  const [expressionDisplayed, setExpressionDisplayed] = useState("");
  const handleClick = (value) => {
    if (value === "AC") {
      setExpressionDisplayed("");
    } else if (value === "=") {
      try {
        let result = eval(expressionDisplayed);
        setExpressionDisplayed(String(result));
      } catch (error) {
        setExpressionDisplayed("Error");
      }
    } else {
      setExpressionDisplayed(prevExpression => prevExpression + value);
    }
  };

  return (
    <div id="calculator">
      <Display props={expressionDisplayed} />
      <Buttons handler={handleClick} />
    </div>
  );
};


const Buttons = ({handler}) => {
    
    const buttons = [
    { value: 0, class: 'num' },
    { value: 1, class: 'num' },
    { value: 2, class: 'num' },
    { value: 3, class: 'num' },
    { value: 4, class: 'num' },
    { value: 5, class: 'num' },
    { value: 6, class: 'num' },
    { value: 7, class: 'num' },
    { value: 8, class: 'num' },
    { value: 9, class: 'num' },
    { value: '+', class: 'op' },
    { value: '-', class: 'op' },
    { value: '*', class: 'op'},
    { value: '/', class: 'op' },
    { value: '.', class: 'op' },
    { value: '=', class: 'op' },
    { value: '%', class : 'op' },
    { value: 'AC', class: 'op' },
  ];
   
  return (
    <div className="calcButtons">
      {buttons.map((item) => (
        <Button handler={handler} props={item} />
      ))}
    </div>
  );
};

const Display = ({props}) => {
  return (
    <div className="display">
      {props}
    </div>
  );
};

const Button = ({ props, handler }) => {
  return (
    <button onClick={() => handler(props.value)} className={`${props.class} button`}>
      {props.value}
    </button>
  );
};


export default App;
