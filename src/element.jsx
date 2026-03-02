import { useRef } from "react";
import Village from "./village";

function Element(){
const inputRef=useRef(null);
const ubdateInput=()=>{
inputRef.current.focus()
}
return(
<>
<h1>musraf dewra</h1>
<Village />
<button onClick={ubdateInput}>head input filed</button>
</> 
)
}
export default Element;