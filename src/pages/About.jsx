import { useEffect, useRef } from "react";
import Counters from "../counters/Counters";

const About = () => {
  const inputRef=useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
    <div>
      <h1 className='text-3xl font-bold text-purple-800'>About</h1>
      <input type="text" ref={inputRef} className="border"/>
      <Counters/>
    </div>
  );
};

export default About;