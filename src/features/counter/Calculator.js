import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCount, divide, minus, multiple, plus } from "./counterSlice";
import './calculate.css'

export const Calculator = () => {
  const count = useSelector(getCount);
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState({
    firstInput: 0,
    secondInput: 0,
  });

  const handleChangeFirst = (e) => {
    setInputValue((prev) => ({
      ...prev,
      firstInput: e.target.value,
    }));
  };
  const handleChangeSecond = (e) => {
    setInputValue((prev) => ({
      ...prev,
      secondInput: e.target.value,
    }));
  };
  return (
    <div className="container">
      <div className="name">Simple Redux Toolkit Calculator By Yusif</div>
      <div className="total">Total: {count}</div>
      <div className="info">If you do not enter values and press </div>
      <div className="info">the button the base values will be 0</div>
      
      <div className="inputdiv">
        <label className="label" htmlFor="first">First Input</label>
        <input
          name="first"
          id="first"
          type="number"
          onChange={(e) => handleChangeFirst(e)}
          placeholder="Enter value"
          className="input"
        />
      </div>
      <div className="inputdiv">
        <label className="label" htmlFor="second">Second Input</label>
        <input
          name="second"
          id="second"
          type='number'
          onChange={(e) => handleChangeSecond(e)}
          placeholder="Enter value"
          className="input"
        />
      </div>
      <div className="buttons">
        <button className="press-button" onClick={() => dispatch(plus(inputValue))}>+</button>

        <button className="press-button" onClick={() => dispatch(minus(inputValue))}> - </button>

        <button className="press-button" onClick={() => dispatch(divide(inputValue))}> / </button>

        <button className="press-button" onClick={() => dispatch(multiple(inputValue))}> * </button>
      </div>
    </div>
  );
};
