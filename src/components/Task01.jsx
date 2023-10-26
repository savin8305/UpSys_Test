// src/Task01.js
import React, { useState } from 'react';

const Task01 = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  const increment = () => {
    setCount(count + incrementValue);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className={`text-${count > 0 ? 'green' : count < 0 ? 'red' : 'gray'}-500 text-4xl font-bold`}>
          {count}
        </h1>
        <div className="mt-4">
          <button
            onClick={increment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4 focus:outline-none"
          >
            Increment
          </button>
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(parseInt(e.target.value, 10))}
            className="border border-gray-300 rounded-md p-2 text-center w-20 focus:outline-none"
          />
          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-4 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task01;
