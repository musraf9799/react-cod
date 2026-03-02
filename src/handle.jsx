import { useState } from "react";

function Handle(){
const [gender, setgender]=useState('female');
return(     
<div>
<h1>hello musraf dewra</h1>
<h4>select gender</h4>
 <input type="radio" onChange={(Event)=>setgender(Event.target.value)} name="gender" value={"male"} checked={gender=='male'} id="male"/> 
<label htmlFor="male">male</label>
<input type="radio" onChange={(Event)=>setgender(Event.target.value)} name="gender" value={"female"} checked={gender=='female'} id="female"/>
<label htmlFor="female">female</label>
<h2>selected Gender :{gender}</h2>
<br /> <br/>
<h4>select city</h4>
<select>
<option value="noida">Noida</option>
<option value="rajasthan">rajasthan</option>
<option value="delhi">delhi</option>
</select>
</div>  
)
}
export default Handle;