import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { actions } from "../../store/redux-store";
import styles from './Plans.module.css'
const Plan = (props) => {
  const dispatch=useDispatch()
  const billing=useSelector(state=>state.billing)
  const plan=useSelector(state=>state.plan)
  const planHandler=(e)=>{
dispatch(actions.planHandler(e.target.id))
 }
const {type,src}=props;
  return <div className={`${styles.plan} ${type===plan && styles.planHighlighted}`}  >
    <div className={styles.planOverlay} onClick={planHandler}  id={type}></div>
    <div>
        <img src={src} alt="plan logo..." />
    </div>
    <div>
        <h2 >{type}</h2>
        <h3>{
            type==="Arcade" && (billing==="monthly" && '$9/mo' || billing==='yearly' && '$90/yr') ||
            type==="Advanced" && (billing==="monthly" && '$12/mo' || billing==='yearly' && '$120/yr') ||
            type==="Pro" && (billing==="monthly" && '$15/mo' || billing==='yearly' && '$150/yr') 
            
        }</h3>
        {billing==='yearly' && <h4>2 months free</h4> }
    </div>
  </div>
};

export default Plan;