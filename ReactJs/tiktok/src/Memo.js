import { useState } from "react";
import Test from "./Test";

function Memo() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div style={{ padding: '10px 32px' }}>
            <Test></Test>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}

export default Memo;
// Compare this snippet from ReactJs/tiktok/src/Content.js: