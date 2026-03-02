import {useState} from "react";

function Hello(){
const [furit, setfurit]=useState(0);

function sum(){
    if(furit > 0){
        setfurit(furit-1)
    }
}


 return(
 <div>
<h1>hello yahoo baba</h1>
  <h2>{furit}</h2> 
  
<button onClick={()=>setfurit(furit+1)}>Incarase</button>
<button onClick={sum}>decrement</button>
 </div>
 )
}
export default Hello;