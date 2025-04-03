import { useState } from 'react';

const oder = [100,200,300]

function App() {
  //bạn có thể truyền tham số khởi tạo cứng như này
  //const [counter,setCounter] = useState(1);
  //Truyền theo dạng callback sẽ nhận giá trị trả về làm tham số khởi tạo
  const [counter,setCounter] = useState(() => {
    const total = oder.reduce((total,curl)=>total+curl)
    console.log(total)
    return total
  });

  function handelCounter() {
    //Bạn có thể dụng như này cách phổ thông
    setCounter(counter+1)
    //Cách dùng callback, cách này giúp set lại biến counter trong khi thực hiện
    //setCounter(prev => prev +1)
  }
  
  return (
    <div className='App' style={{padding:20}}>
      <h1>{counter}</h1>
      <button onClick={handelCounter}>Click</button>
    </div>
  );
}

export default App;