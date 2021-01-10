import React, { useState, useReducer } from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                count: state.count + 1
            };
        case "DECREASE":
            return {
                ...state,
                count: state.count - 1
            };
        default:
            throw new Error();
    }
};

function App() {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });

    const handleClickIncrease = () => {
        dispatch({ type: "INCREASE" });
    };

    const handleClickDecrease = () => {
        dispatch({ type: "DECREASE" });
    };

    return (
        <>
            <div className="App">
                <h1>Hello {state.count}</h1>
            </div>
            <div>
                <button onClick={handleClickIncrease}>+</button>
                <button onClick={handleClickDecrease}>-</button>
            </div>
        </>
    );
}

export default App;
