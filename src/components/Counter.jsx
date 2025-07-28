import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h2>This is a counter App</h2>
      <h3>Current count: {count}</h3>
      <div className="buttons-div">
        <button onClick={() => setCount(count - 5)}>-</button>
        <button onClick={() => setCount(count + 5)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
