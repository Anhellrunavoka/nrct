import React,{useState} from 'react';

const First=()=>{


const [visibleSpoiler, setvisibleSpoiler] = useState(false);

    const toggleSpoiler=()=>{setvisibleSpoiler(!visibleSpoiler)}
      
    const [i, setI] = useState(1);

      const increment=()=>{
        setI((prev)=>prev+1);
        setI((prev)=>prev+1);
        setI((prev)=>prev+1);
      }  
      const decrement=()=>{
        setI(i-1);
      }
        return(<div>
            <h1>First</h1>
            <button onClick={toggleSpoiler}>show spoiler</button>
            {visibleSpoiler && <div>Spoiler</div>}
            <hr/>
            <button onClick={decrement}>-</button>
            <b>{i}</b>
            <button onClick={increment}>+</button>
        </div>
        );

};
export default First;

