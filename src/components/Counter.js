import React, { useState, useEffect } from "react";

function useCounter(initState, step) {
    //initState can accept a function with a returned value
    const [count, setCount] = useState(initState);
    const increment = () => {
        setCount(count + step)
    }
    return {count, increment}
}

export default function Counter() {
    const initCount = () => Number(window.localStorage.getItem('count') || 0)
    const {count, increment} = useCounter(initCount, 1);
    useEffect(()=> {
        window.localStorage.setItem('count', count)
    }, [count])
    return <button onClick={increment}>{count}</button>
}
