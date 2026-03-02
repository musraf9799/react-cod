
// import { useState } from "react";
// import "./App.css";
// function Kaper() {
//     let [todolist, settodolist] = useState([]);
//     let saveToDoList = (event) => {
//         event.preventDefault();
//         let toname = event.target.toname.value;
//         if (!todolist.includes(toname)) {
//             let finalDolist = [...todolist, toname]
//             settodolist(finalDolist)
//         } else {
//             alert("Todo Name Allready Exists...")
//         }
//     }
//     let list = todolist.map((value, index) => {
//         return (
//             < TodoListIteams value={value} key={index} indexnumber={index}
//                 todolist={todolist}
//                 settodolist={settodolist}
//             />
//         )
//     })

import { useState } from "react";


//     return (
//         <div className="App">
//             <h1>Todo List</h1>
//             <form onSubmit={saveToDoList}>
//                 <input type="text" name='toname' />
//                 <button>save</button>
//             </form>
//             <div className="outerDiv">
//                 <ul>
//                     {list}
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default Kaper;

// function TodoListIteams({ value, indexnumber, todolist, settodolist }) {
//     let [Stutes, setstutes] = useState(false)
//     let deleteRow = () => {
//         let finealData = todolist.filter((v, i) => i != indexnumber)
//         // console.log(finealData);
//         settodolist(finealData);
//     }
//     let cheakstatus = () => {
//         setstutes(!Stutes)
//     }
//     return (
//         <li className={(Stutes) ? 'completetodo' : ''} onClick={cheakstatus}>
//             {indexnumber + 1}{value}
//             <span onClick={deleteRow}>&times;</span>
//         </li>
//     )
// }

  


function Kaper(){
const [todolist, settodolist]=useState([])



let toolbar=(event)=>{
  event.preventDefault();
 let todoname=event.target.toname.value;
 if(!todolist.includes(todoname)){
}else{
 alert("toname allready exiset");
}
}
 return(
<div>
<h1>Todo List</h1>
<form onSubmit={toolbar}>
 <input type="text" />
 <button>save</button>
</form>
</div>
 )
}
export default Kaper;