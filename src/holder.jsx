//  import { useState } from "react";

// function Holder(){

//   const [value, setValue] = useState("");
//   const [show, setShow] = useState("");

//   function Hello(){
//     setShow(value);   // button click par change
//   }

//   return(
//     <div>
//       <h1>Musraf Dewra</h1>

//       <input
//         type="text"
//         value={value}
//         onChange={(e)=>setValue(e.target.value)}
//         placeholder="name"
//       />

//       <br /><br />

//       <button onClick={Hello}>Submit</button>

//       <h2>{show}</h2>
//     </div>
//   )
// }

// export default Holder;

 import { useState } from "react";
function Holder(){
const [musraf,setmusraf]=useState("");
const [show, setshow]=useState("");
 function Hello(){
    setvalue(value);
 }
 return(
    <div>
    <h1>hello</h1>
    <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="name" />
    <br></br>
    <br></br>
    <button onClick={Hello} >sumbit</button>
    <h1>{show}</h1>
    </div>
 )
}
export default Holder;