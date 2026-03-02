import { useState } from "react";

function Note() {
    const [value, setvalue] = useState(0);
    function Hello() {
         setvalue(value-1);
        
    }

  let color;
  if(value>0){
    color = "green";
   }else if(value<0){
     color = "red";
  }else{
    color = "black";
  }

return (
    <>
        <div>
            <h1 style={{color: color}}>{value}</h1>
            <button onClick={() => setvalue(value + 1)}>sumbit  </button>
            {/* <button onClick={Hello}>dencrement</button> */}
              
              
        {value >= 0 && (
          <button onClick={Hello}>decrement</button>
      )}
         
        </div>
    </>

);
}
export default Note;