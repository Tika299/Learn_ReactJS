import { useState } from 'react';
import Content from './Content';
import FakeChat from './FakeChat';



function App() {
  const [showChat, setShowChat] = useState(false);
  const handleClick = () => {
    setShowChat(!showChat);
  }

  return (
    <div style={{padding:20}}>
      {/* {<Content/>} */}
      <button onClick={handleClick}>Toggle</button>
      {showChat && <FakeChat/>}
    </div>
  )
}

export default App;