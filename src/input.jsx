import { useState } from "react"
function Furit(){
const [val,setval]= useState("anail sidu");
return(
    <div>
    <h1>get input field value</h1>
    <input type="text" value={val} onChange={(event)=>setval(event.target.value)} placeholder="Enter user name"/>
     <h1>{val}</h1> 
     <button onClick={()=>setval("")}>clere value</button>
    </div>
)
}
export default Furit;