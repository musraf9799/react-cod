import User from "./display";

function Bharat(){
const displayName = (name)=>{
  alert(name)
}
 return(
 <div>
 {/* <button onClick={()=>displayName("anail")}>sumbit</button>  */}
<User displayName={displayName}/>
<User displayName={displayName}/>
 </div>
 )
}
export default Bharat;