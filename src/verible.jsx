import { useState } from "react";


function State(){
const [display, setdisplay]=useState(true)
return<div>
    <>
    <h1>hello musraf dewra</h1>
    {
        display? <h1>Anail sidu</h1>:null
        
    }
    <button onClick={()=>setdisplay(!display)}>Toogle</button>
    </>
</div>
}
export default State;