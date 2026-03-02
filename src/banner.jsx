import { useState } from "react";
import Clock from "./clock";
function Banner(){
const [color,setcolor]=useState('Red');
 return(
<div>
    <h1>musraf dewra</h1>
    <select onChange={Event=>setcolor(Event.target.value)}>
    <option value={"red"}>Red</option>
    <option value={"blue"}>blue</option>
    <option value={"green"}>green</option>
    <option value={"orange"}>orange</option>
     <option value={"Pink"}>Pink</option>
      <option value={"purpal"}>Purpal</option>
    </select>
    <Clock color={color} />
</div>
 )
}
export default Banner;