import { icreateContext } from "../ContextApi/MakeContext"
import { useContext } from "react"

export default function Decreament() {
    let {count , setCount} = useContext(icreateContext);
  return (
    <div>
        <h3>i am Dereament section</h3>
        <button  className='border p-2'
      onClick={()=>{setCount(count-1)}}>Decreament</button>
      
    </div>
  )
}
