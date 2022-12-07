import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  let obj = {};
  const [result, setResult] = useState(obj);
  const handleClick = (e) => {
    const buttonValue = e.target.textContent;
    obj = calculate(result, buttonValue);
    setResult(obj);
  };

  return (
    <div style={{
      display: 'grid',
      'justify-content': 'center',
      color: 'lightseagreen',
      'padding-top': '30px',
    }}
    >
      <h2>Lates do some math</h2>
      <div style={{ width: '400px' }}>
        <div className="view-num">
          <span>{result.next || result.operation || result.total || 0}</span>
        </div>
        <div className="buttons-container">
          <button type="button" onClick={handleClick}>AC</button>
          <button type="button" onClick={handleClick}>+/-</button>
          <button type="button" onClick={handleClick}>%</button>
          <button type="button" onClick={handleClick} className="special-button">&#xf7;</button>
          <button type="button" onClick={handleClick}>7</button>
          <button type="button" onClick={handleClick}>8</button>
          <button type="button" onClick={handleClick}>9</button>
          <button type="button" onClick={handleClick} className="special-button">x</button>
          <button type="button" onClick={handleClick}>4</button>
          <button type="button" onClick={handleClick}>5</button>
          <button type="button" onClick={handleClick}>6</button>
          <button type="button" onClick={handleClick} className="special-button">-</button>
          <button type="button" onClick={handleClick}>1</button>
          <button type="button" onClick={handleClick}>2</button>
          <button type="button" onClick={handleClick}>3</button>
          <button type="button" onClick={handleClick} className="special-button">+</button>
          <button type="button" onClick={handleClick} className="zero">0</button>
          <button type="button" onClick={handleClick}>.</button>
          <button type="button" onClick={handleClick} className="special-button">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
