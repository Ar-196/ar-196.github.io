import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => {setCount((prev) => prev + 1)}}>+</button>
      <h1>{count}</h1>
      <button onClick={() => {setCount((prev) => prev - 1)}}>-</button>
    </>
  );
}

export default App;
