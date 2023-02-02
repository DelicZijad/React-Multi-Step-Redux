import React from "react";
import styles from './Btns.module.css';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/redux-store";
const Btns = (props) => {
  const dispatch=useDispatch()
  const step=useSelector(state=>state.step)
  const increaseStep=()=>{
    dispatch(actions.increaseStep())
  }
  const decreaseStep=()=>{
    dispatch(actions.decreaseStep())
  }
  const confirm=()=>{
    dispatch(actions.setConfirm())
  }
  const formValid=useSelector(state=>state.formValid)
    const {setConfirmed}=props
  return <div className={styles.btns}>
   {step>1 && <button onClick={decreaseStep} className={styles.btnsBack}>Go Back</button>}
   {step<4 && <button onClick={increaseStep} disabled={!formValid} className={styles.btnsNext}>Next Step</button>}
   {step===4 && <button onClick={confirm} className={styles.btnsConfirm}>Confirm</button>}
  </div>
};

export default Btns;