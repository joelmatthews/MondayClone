import React, { useEffect, useState } from 'react'
import classes from "./Modal.module.scss";

export default function Modal({ onClose, children }) {
  const [ show, setShow ] = useState(false);

  // This will run when the component mounts
  useEffect(() => {
      setShow(true);
    
    
    // Cleanup function (will run when the component unmounts)
    return () => {
      console.log('Modal component is unmounted');
    };
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // This will run whenever the `show` prop changes
  useEffect(() => {
    console.log('show prop changed:', show);
  }, [show]);


  return (
    <div className={`${classes.modal} ${show ? classes["modal__show"] : ""} `}>
        <div className={classes["modal__overlay"]} onClick={onClose} />
        <div className={classes["modal__content"]}>
            <span onClick={onClose} className={classes["modal__close"]}>
                &times;
            </span>
            {children}
        </div>
    </div>
  )
}
