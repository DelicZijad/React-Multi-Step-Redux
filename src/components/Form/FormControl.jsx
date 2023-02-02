import React from "react";
import styles from './Form.module.css'

const FormControl = (props) => {
    const {id,errorTxt,placeholder,func,label,valid,init}=props
  return <div className={styles.formControl}>
     <label
      htmlFor={id}>{label}</label>
     <input 
     onChange={func}     
     onBlur={func}
      type="text" 
      id={id}
       className={`${styles.formInput} ${(!init && !valid) && styles.formInputInvalid}`}
       placeholder={placeholder}/>
     <small className={`${styles.formError} ${(init || valid) &&'hide'}`}>{errorTxt}</small>
     </div>;
};

export default FormControl;
