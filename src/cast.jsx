// import { useState } from "react";

import { useState } from "react";

// function Cast(){
// const [musraf,setmusraf]=useState(0);
// function SUM(){
//  if(musraf>0)
//      setmusraf(musraf-1) 
// }
// return(
// <div>
// <h1>musraf dewra</h1>
// <h2>{musraf}</h2>
//  <button onClick={()=>setmusraf(musraf+1)}>sumbit</button> 
// <button onClick={SUM}>sumbit</button>
// </div>
// )
// }
// export default Cast;

function Cast(){
const [value, setvalue]=useState("musraf dewra");
 return(
    <>
    <div>hello yahoo baba{value}</div>
    <div>
    <input value={value} onChange={(e)=>setvalue(e.target.value)} type="text" placeholder="Name"/>
    <br></br>
    <br></br>
    </div>
    <button >sunmbit</button>
   </> 
 )
}
export default Cast;


