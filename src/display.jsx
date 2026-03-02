function User({displayName}){
// const name="Anail"
 return(
<div>
{/* <h1 onClick={displayName}></h1> */}
<button onClick={()=>displayName()}>displayName</button>
</div>
 )
}
export default User;