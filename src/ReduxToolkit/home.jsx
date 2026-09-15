import React from 'react'
// get data 
import {useSelector} from "react-redux"
// Trigger
import { useDispatch } from 'react-redux'
import {increament} from "./mySlice.js"



export default function Home() {
    let getdata = useSelector((eventObj)=>{
    return eventObj.countStore.stateValue });

    let myDispatch = useDispatch();
  return (
    <div>
        <h1>Hi  {getdata}</h1>
        <button className='border p-1'  onClick={
            ()=> myDispatch(increament())
        }>Increase Hi Value  </button>
      
    </div>
  )
}
