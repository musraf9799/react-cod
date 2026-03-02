import { useState } from "react";
import Counter2 from "./counter2.jsx";

function Time(){
const [count, setcount]=useState(0);
const [data, setdata]=useState(0);
return(
<div>
    
  <Counter2 count={count} data={data} />
   <button onClick={()=>setcount(count+1)}>counter </button>
   <button onClick={()=>setdata(data+1)}>data </button>
</div>
)
}
export default Time;