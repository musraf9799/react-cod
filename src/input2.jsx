import { useState } from "react";

function Grapes(){
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");

  const [show, setShow] = useState(false);   // 👈 new state

  const handleSubmit = () => {
    setShow(true);
  }

  return(
    <div>
      <h1>musraf dera</h1>

      <input 
        type="text" 
        onChange={(e)=>setName(e.target.value)}  
        placeholder="Name" 
      />
      <br /><br />

      <input 
        type="email" 
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <br/><br />

      <input 
        type="number" 
        onChange={(e)=>setAge(e.target.value)} 
        placeholder="Age" 
      />
      <br /> <br />

      <button onClick={handleSubmit}>Submit</button>

      <br /><br />

      {show && (
        <div>
          <h2>{Name}</h2>
          <h2>{Email}</h2>
          <h2>{Age}</h2>
        </div>
      )}

    </div>
  )
}

export default Grapes;
