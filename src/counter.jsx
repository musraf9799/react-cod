import { useState } from "react";

const Counter=()=>{
const [count,setcount]=useState(0)
       
    return(
        <div>
       <h1>counter:{count}</h1>
       <button onClick={()=>setcount(count+1)}>ubdate counter</button>
        </div>
    )
}
export default Counter;