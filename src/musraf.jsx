
import { useState } from "react";
import Counter from "./mounting";

function Musraf(){
const [count,setCount]=useState(0);
const [data,setdata]=useState(0);
const [display, setdisplay]=useState(true);
    return(
    <div>
    {
     display?  <Counter count={count} data={data} ></Counter>:null
    }
    <button  onClick={()=>setCount(count +1)}>counter</button>
    <button onClick={()=>setdata(data +1)}>data</button>
     <button onClick={()=>setdisplay(!display)}>toogle</button>
    </div>
    )
}
export default Musraf;