import { useEffect, useState } from "react";
function Effecat(){
const [counter, setcounter]=useState(0);
const [data, setdata]=useState(0);
useEffect(()=>{
  callonce();
counterFunction();
},[counter])
function counterFunction(){
    console.log(counterFunction);
}
function callonce(){
console.log("callonce function called");
}
return(
    <div>
    <h1>hello yahoo baba</h1>
    <button onClick={()=>setcounter(counter +1)}>counter{0}</button>
    <button onClick={()=>setdata(data +1)}>data{ 0}</button>
    </div>
)
}
export default Effecat;