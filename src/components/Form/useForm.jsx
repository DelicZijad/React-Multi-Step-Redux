import { useEffect, useState } from "react"

const useForm=(validateValue)=>{
const [enteredValue,setEnteredValue]=useState('')
const [enteredValueInit,setEnteredValueInit]=useState(true);
const [enteredValueValid,setEnteredValueValid]=useState(true);

useEffect(()=>{
  setEnteredValueValid(validateValue(enteredValue))
},[enteredValue])
  const valueInputHandler=(e)=>{
    setEnteredValue(e.target.value)
     setEnteredValueInit(false)
  }

  return {
    value:enteredValue,
    valueInit:enteredValueInit,
    valueValid:enteredValueValid,
    valueInputHandler
  }
}
export default useForm