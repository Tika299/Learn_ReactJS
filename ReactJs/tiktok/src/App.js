import { useState } from 'react';
import Test from './Test';


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div style={{padding:'10px 32px'}}>
      <Test onIncrease={handleClick}/>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App;