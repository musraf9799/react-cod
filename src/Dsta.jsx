


import { useState } from "react";
function Dsta(){
const [name, setName]=useState('anail');
const [password, setPassword]=useState('');
const [email, setaEmail]=useState('');
return(
    <div>
    <h1>hello yahoo baba</h1>
    <form action="" method="get">
    <input type="text" onChange={(Event)=>setName(Event.target.value)} placeholder="Enter Name" />
    <br/><br/>
    <input type="password" onChange={(Event)=>setPassword(Event.target.value)} placeholder="Enter password" />
    <br/><br/>
    <input type="text" onChange={(Event)=>setaEmail(Event.target.value)} placeholder="Enter Email" />
    <br/><br/>
    <button>submit</button>
    <button onnclick={()=>{setaEmail('')}}>cler</button>
    <h3>{name}</h3>
    <h3>{password}</h3>
    <h3>{email}</h3>
    </form>
    </div>
)
}
export default Dsta;