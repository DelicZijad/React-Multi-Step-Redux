import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Btns from './components/Btns'
import Display from './components/Display'
import Steps from './components/Steps/Steps'

function App() {
const step=useSelector(state=>state.step)
const billing=useSelector(state=>state.billing)
const plan=useSelector(state=>state.plan)
const confirm=useSelector(state=>state.confirm)
const [extras,setExtras]=useState([])
const [totalPrice,setTotalPrice]=useState(0)
const [price,setPrice]=useState(0)
useEffect (()=>{
  setPrice(billing==='monthly' && (plan==="Arcade" && 9 || plan==='Advanced' && 12 || plan==='Pro' && 15) || 
 billing==='yearly' && (plan==="Arcade" && 90 || plan==='Advanced' && 120 || plan==='Pro' && 150))
},[billing,plan])
useEffect(()=>{
  setTotalPrice(price + extras?.reduce((acc,curr)=>acc+curr.price,0))
},[price,extras])

useEffect(()=>{
  if(step===3)setExtras([])
},[step])
const addExtra=(value)=>{
  setExtras(prev=>!prev.includes(value) && [...prev,value])
}
const  removeExtra=(value)=>{
  setExtras(prev=>{
    const index=prev.indexOf(value)
  return prev.filter((item,i)=>i!==index)
   } )
}
  return (
    <div className="App">
  <main className='content'>
    <Steps  step={step}/>
    <div className="contentWrapper">
   <Display 
   price={price}
   totalPrice={totalPrice}
   extras={extras}
   addExtra={addExtra}
   removeExtra={removeExtra}
   />
       {!confirm && <Btns 
     /> } 
    </div>
  </main>
    </div>
  )
}

export default App;
