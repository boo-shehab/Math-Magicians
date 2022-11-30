import React from 'react';

const Calculator = () => (
  <div>
    <div className="view-num">
      <span>0</span>
    </div>
    <div className="buttons-container">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="special-button">&#xf7;</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="special-button">x</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="special-button">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="special-button">+</button>
      <button type="button" className="zero">0</button>
      <button type="button">.</button>
      <button type="button" className="special-button">=</button>
    </div>
  </div>
);
export default Calculator;
