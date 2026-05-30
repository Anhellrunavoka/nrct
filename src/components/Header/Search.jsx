import React, { useState } from "react";
import { useNavigate } from "react-router";
 
const Search = () => {
  const [text, setText] = useState("");
  const navigate=useNavigate();
 
  const handleSubmit = (e) => {
    navigate(`/search?q=${text}`);
   };
   
  return (
    <div>
      <input
        type="text"
        className="border"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
      />
    </div>
  );
};
 
export default Search;