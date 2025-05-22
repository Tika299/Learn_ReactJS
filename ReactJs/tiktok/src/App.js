import { useState } from 'react';
import Content from './Content';
import FakeChat from './FakeChat';


//useMemo là một hook giúp tối ưu hóa hiệu suất của ứng dụng React bằng cách ghi nhớ giá trị đã tính toán trước đó và chỉ tính toán lại khi các phụ thuộc thay đổi.
// Điều này giúp giảm thiểu việc tính toán lại các giá trị không cần thiết, từ đó cải thiện hiệu suất của ứng dụng.
// useMemo nhận vào hai tham số: một hàm callback và một mảng phụ thuộc.
// Hàm callback sẽ trả về giá trị cần ghi nhớ, còn mảng phụ thuộc sẽ xác định khi nào giá trị đó cần được tính toán lại.
// Nếu mảng phụ thuộc không thay đổi, useMemo sẽ trả về giá trị đã ghi nhớ trước đó.


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