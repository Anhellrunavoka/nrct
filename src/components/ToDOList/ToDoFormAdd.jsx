import React,{useState} from 'react';

const ToDoFormAdd = ({addTask}) => {
    const[newTitle,setNewTitle]=useState('');

    const[titleError,setTitleError]=useState(null);

    const handleSubmit=()=>{
        if(newTitle.length<3){
            setTitleError("Title must be least 3")
            return;
        }
        addTask(newTitle);
        setNewTitle("");
        setTitleError(null);
    }

    return (
        <div className="form-add">
            <input type="text" value={newTitle} 

            onChange={(e)=>setNewTitle(e.target.value)}

            onKeyDown={(e)=>e.key==='Enter'&&handleSubmit()}/>
            
            <button onClick={handleSubmit}>Add</button>

            {titleError&&<div style={{color:'red',fontSize:'.9em'}}>{titleError}</div>}
        </div>
    );
}

export default ToDoFormAdd;
