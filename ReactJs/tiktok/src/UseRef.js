import { useState, useRef } from "react";

function UseRef() {
    const [count, setCount] = useState(0);

    const tiemId = useRef();

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prevCounrt => prevCount - 1);
        })
    };

    const handleStop = () => {
        clearInterval(timeId.current);
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Count: {count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default UseRef;