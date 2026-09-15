import  { Children, createContext, useState } from 'react'

export let icreateContext = createContext()  // it return a Provider

export default function Context({children}) {
  let [count , setCount] = useState(0)  // Declare a Global state 
  let myObj = {
    count, setCount
  }
  // console.log(myObj);
  
  return (
    <icreateContext.Provider value = {myObj} >   
      {children}
      
    </icreateContext.Provider>
  )
}
 
