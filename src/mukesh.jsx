function Mukesh(){
let Todolist=(event)=>{
    event.preventDefault();
    let toname=event.target.toname.value;
    alert(toname);
}
  return(
 <div>
 <h1>Todo List</h1>
 <form  onSubmit={Todolist}>
    <input type="text" name="toname"/><button>save</button>
 </form>
 </div>
  )  
}
export default Mukesh;