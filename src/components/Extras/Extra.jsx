import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useSelector } from "react-redux";
import styles from './Extras.module.css'
const Extra = (props) => {
 
    const {id,price,type,desc,addExtra,removeExtra}=props
     const billing=useSelector(state=>state.billing);
    const [picked,setPicked]=useState(false);
    const [checked,setChecked]=useState(false);

    const value=useMemo(()=>{
        return{
            type:type,
            price:price
        }},[type,price])
    const checkingHandler=(e)=>{
        setPicked(e.target.checked)
        setChecked(e.target.checked)
    }
    const pickHandler=()=>{
        setPicked(prev=>!prev)
        setChecked(prev=>!prev)
    }
    useEffect(()=>{
        if(picked)addExtra(value)
      else removeExtra(value)
    },[picked])
    
  return <div onClick={pickHandler} className={`${styles.extra} ${picked && styles.extraPicked}`}>
    <div className={styles.extraMain}>
        <input checked={checked} onChange={checkingHandler}  type="checkbox" name={`pickExtra${id}`} id={`pickExtra${id}`} />
        <div>
            <label className={styles.extraType} onClick={pickHandler}  htmlFor={`pickExtra${id}`}>{type}</label>
            <label className={styles.extraDesc} onClick={pickHandler} htmlFor={`pickExtra${id}`}>{desc}</label>
        </div>
    </div>
    <button className={styles.extraPrice}>{`+$${price}/${billing==='monthly' && 'mo' || 'yr' }`}</button>
  </div>
};

export default React.memo(Extra)