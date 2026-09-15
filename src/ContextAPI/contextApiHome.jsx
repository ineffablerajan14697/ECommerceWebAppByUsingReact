
import { icreateContext } from '../ContextApi/MakeContext';
import { useContext } from 'react'
import Increament from '../Increament'
import Decreament from './Decreament'
export default function Home() {
  let {count , setCount} = useContext(icreateContext);  // get Data formate object
  // console.log({count,setCount});
  
  return (
    <div className='border w-[300px] m-auto mt-50 font-bold text-center'>
      <Increament />
      <h1>Hi I am Home Page  {count}</h1>
      
      <Decreament />

    </div>
  )
}
