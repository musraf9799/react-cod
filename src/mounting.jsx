import { useEffect } from "react"

const Counter = ({count,data})=> {
useEffect(()=>{
console.log("mounting phase only");
},[])

 useEffect(()=>{
 console.log("ubadate fease only");
 },[count])
 return(
<div>
 <h1>counter value {count}</h1>
  <h1>data value {data}</h1>
    
</div>
)
}
export default Counter;