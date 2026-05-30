import React, { useCallback, useState } from 'react';
import CounterValue from './CounterValue';
import IsFive from './IsFive';

const Counters = () => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const someFunc=useCallback(()=>{console.log("some func")},[]);
    return (
        <div>
            <div>
                <button onClick={() => setCount1(count1 - 1)}>-</button>
                <CounterValue value={count1} id="count1" func={someFunc} />
                <button onClick={() => setCount1(count1 + 1)}>+</button>
            </div>

            <div>
                <button onClick={() => setCount2(count2 - 1)}>-</button>
                <CounterValue value={count2} id="count2"/>
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <IsFive value={count2}/>
            </div>
        </div>
    );
}

export default Counters;
