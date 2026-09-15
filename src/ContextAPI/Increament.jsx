
import { icreateContext } from "./ContextApi/MakeContext";
import { useContext } from "react";

export default function Increament() {
     let {count , setCount} = useContext(icreateContext);
    
  return (
    <div>
       
      <h3>I am increament Section</h3>
      <button  className='border p-2'
      onClick={()=>{setCount(count+1)}}>Increament</button>
    </div>
  )
}
