import { BrowserRouter } from 'react-router-dom';
import { Task01} from './components';

import React,{useState} from 'react';
import Task02 from './components/Task02';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  return (
    <BrowserRouter>
            <h2 className="mt-16 text-center text-3xl font-extrabold text-white">
          Task-01
        </h2>
      <Task01/>
      <h2 className="mb-40 text-center text-3xl font-extrabold text-white">
          Task-02
        </h2>
      <Task02/>
      <h2 className="m-40 text-center text-3xl font-extrabold text-white">
          Task-03
        </h2>
      <div className="text-center">
      
      {isLoggedIn ? (
        <button onClick={handleLoginToggle} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Log Out
        </button>
      ) : (
        <button onClick={handleLoginToggle} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Loged In
        </button>
      )}
    </div>
    <h2 className="m-40 text-center text-3xl font-extrabold text-white">
          Task-04
        </h2>
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={`w-20 h-20 bg-blue-500 transition-transform transform ${
          isAnimating ? 'translate-x-32' : ''
        }`}
      ></div>
      <button
        onClick={toggleAnimation}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
      >
        Toggle Animation
      </button>
    </div>
    </BrowserRouter>    
  )
}

export default App
