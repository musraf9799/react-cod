

function Folder(){
const handleForm=(event)=>{
 event.preventDefault();
}
return(
<div>
<h1>musraf dewra</h1>
<form action="" method="post" onSubmit={handleForm}>
<input type="text" id="user" placeholder="Enter User Name" />
<br></br>
<br></br>
<input type="Passoword" id="password" placeholder="Enter User passoword" />
<br></br>
<br></br>
<button>sumbit</button>
</form>
</div>
)
}
export default Folder;