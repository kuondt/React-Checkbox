import logo from './logo.svg';
import './App.css';
import React, { useState, useReducer } from "react";

const Checkbox = ({ fnClick, fnChange, title = "", checked = false }) => (
  <label>
    <input
      onClick={e => {
        if (fnClick !== undefined) fnClick(e.target.checked);
      }}
      onChange={e => {
        if (fnChange !== undefined) fnChange(e.target.checked);
      }}
      type="checkbox"
      checked={checked}
    />
    {" Checkbox " + title}
  </label>
);

const App = () => {
  const initialState = {
    click: false,
    change: false
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, setState] = useReducer(reducer, initialState);

  const clearFilter = () => setState(initialState);
  return (
    <div className="App">
      <button onClick={() => clearFilter()}>Limpiar</button>
      <br />
      <Checkbox
        title="Click"
        fnClick={v => setState({ click: v })}
        checked={state.click}
      />
      <br />
      <Checkbox
        title="Change"
        fnChange={v => setState({ change: v })}
        checked={state.change}
      />
      <br />
      click: {state.click ? "true" : "false"}
      <br />
      change: {state.change ? "true" : "false"}
    </div>
  );
};
export default App;
