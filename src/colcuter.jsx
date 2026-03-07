import { useState } from "react";
import Coloum from "./coloum"
import './index.css'

function Colcuter(){
const [data,setdata]=useState("");
var delate = (event) => {
 console.log(event.target.value);
 setdata( data.concat(event.target.value)) 
}
var start = () => {
 setdata(eval(data).toString());
}
var Back = () =>{
setdata(data.slice(0,-1))
}
var clear = () => {
setdata("");
}
return(
    <>
    <div className="container">
    <div>
    <input placeholder="0" value={data}/>
    </div>
    <button onClick={delate} value="(">(</button>
    <button onClick={delate}  value=")">)</button>
    <button onClick={delate} value="%">%</button>
      <button onClick={clear} >Ac</button>  

     <button onClick={delate} value="7">7</button>
    <button onClick={delate} value="8">8</button>
    <button onClick={delate} value="9">9</button>
    <button onClick={delate} value="*">*</button>

     <button onClick={delate} value="4">4</button>
    <button onClick={delate} value="5">5</button>
    <button onClick={delate} value="6">6</button>
    <button onClick={delate} value="-">-</button>

     <button onClick={delate} value="1">1</button>
    <button onClick={delate} value="2">2</button>
    <button onClick={delate} value="3">3</button>
    <button onClick={delate} value="+">+</button>

     <button onClick={delate} value="0">0</button>
    <button onClick={Back}>Back</button>
    <button onClick={start}>=</button>
    <button onClick={delate} value="/">/</button>

    </div>

    </>
)
}
export default Colcuter;