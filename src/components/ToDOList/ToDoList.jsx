import React, { useEffect, useState,useReducer } from 'react';
import "./ToDoList.css";
import ToDoFormAdd from './ToDoFormAdd';
import Filters from './Filters';
import Item from './Item';
import items from "./data";
import { nanoid } from 'nanoid'
import Modal from '../modal/Modal';
import TaskReducer from '../../reducers/TaskReducer';
import { TaskActionTypes } from '../../reducers/TaskReducer';

const ToDoList = () => {
    const[tasks,dispatch]=useReducer(TaskReducer,items);
    
    //const[tasks,setTasks]=useState(items);
    const [activeFilter, setActiveFilter] = useState('All');
    const [visibleModal, setVisibleModal] = useState(false);
    const [currentTask, setSelectedTask] = useState(null);
    useEffect(()=>{
        const data=localStorage.getItem('tasks');
        if(data){
            dispatch({
                type:TaskActionTypes.INIT_TASKS,
                payload:JSON.parse(data)
            });
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks]);

    const setModalData=(task)=>{
        setVisibleModal(true);
        setSelectedTask(task);
    }

    const addTask=(value)=>{
        dispatch({
            type:TaskActionTypes.ADD_TASK,
            payload:{id:nanoid(),title:value,done:false}
        });
        // setTasks([...tasks,{id:nanoid(),title:value,done:false}])
    }

    const removeTask=(id)=>{
        dispatch({
            type:TaskActionTypes.REMOVE_TASK,
            payload:id
        });
        //setTasks(tasks.filter(item=>item.id!==id))
    }

    const toggleDone=(id)=>{
        dispatch({
            type:TaskActionTypes.TOGGLE_DONE,
            payload:id
        });
        // setTasks(tasks.map((item)=>item.id===id?{...item,done:!item.done}:item))
    }
    const changeTitle=(id,title)=>{
        dispatch({
            type:TaskActionTypes.CHANGE_TITLE,
            payload:{id,title}
        });
        //setTasks(tasks.map((item)=>(item.id===id?{...item,title}:item)),);
    }

    const filtersData={
        All:()=>true,
        Done:(item)=>item.done,
       "Todo task":(item)=>!item.done
    }

    return (
        <div className="container-todo">
            <h1>To Do List</h1>
            
            <ToDoFormAdd addTask={addTask}/>

            <div className='todo'>

                    <Filters activeFilter={activeFilter} 
                    setActiveFilter={setActiveFilter}
                    filtersData={filtersData}/>

                <div className='list'>
                    {tasks.filter(filtersData[activeFilter]).map(item=><Item item={item} 
                    key={item.id} 
                    removeTask={removeTask}
                    toggleDone={toggleDone}
                    changeTitle={changeTitle}
                    setModalData={setModalData}
                    />)}
                </div>
            </div>
            <Modal visible={visibleModal} 

            onClose={() => setVisibleModal(false)}
            >
            <h1>To Do List</h1>
            <p>{currentTask?.title}</p>
              </Modal>          
        </div>
    );
};

export default ToDoList;
