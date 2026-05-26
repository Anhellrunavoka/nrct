import classNames from 'classnames';
import React,{useEffect,useState} from 'react';
import "./Modal.css";

const Modal = ({children,visible,onClose }) => {


    return (
        <div className={classNames("modal-bg", {visible: visible})}>
            <div className="modal">
                <button onClick={onClose}>Close</button> 
                {children}
            </div>
        </div>
    );
}
export default Modal;
 