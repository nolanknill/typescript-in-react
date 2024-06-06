import { useState } from "react";

interface CounterProps {
    startCount: number,
    backgroundColor: string
}

const Counter = ({ startCount, backgroundColor }: CounterProps) => {

    const [count, setCount] = useState<number>(startCount); // Infers number for count

    return (
        <div style={{backgroundColor: backgroundColor}}>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    )
}

export default Counter;