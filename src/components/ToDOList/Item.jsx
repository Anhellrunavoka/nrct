import React,{useState} from 'react';
import classNames from "classnames";
const Item = ({item,removeTask,toggleDone,changeTitle}) => {
    const [isChecked,setIsChecked]=useState(item.done);
    const[isEditable,setIsEditable]=useState(false);
    const [title, setTitle] = useState(item.title);
    const handleChecked=(e)=>{
        setIsChecked(e.target.checked);
        toggleDone(item.id);
    }
    const Save = () => {
        changeTitle(item.id, title);
        setIsEditable(false);
    };
    if(isEditable) return (
            <div className='item'>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e)=>e.key==='Enter'&&Save()}/>

            </div>
        );
    else
        return ( 
            
            <div className='item'>
                <input type="checkbox" checked={isChecked} onChange={handleChecked}/>
                <span className={classNames('task-title',{done:item.done})} onClick={()=>setIsEditable(true)}>
                    {item.title}</span>
                <button className='remove-btn' onClick={()=>removeTask(item.id)}>Delete</button>
            </div>
        );
}

export default Item;