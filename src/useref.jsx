// import { useRef } from "react";
// function Useref(){
// const inputRef=useRef(null);
//  const inputHandler=()=>{
//  console.log("inputeRf"); 
//  inputRef.current.focus()
//  }
//     return(
//     <>
//   <h1>musraf dewra</h1>
//   <input ref={inputRef} type="text" placeholder="Enter User Name" />
//   <br>
//   </br>
//   <br>
//   </br>
//   <button onClick={inputHandler}>focus on input filed</button>
//     </> 
//     )
// }
// export default Useref;

import { useRef } from "react";

function Useref(){
 const timeRef = useRef(null);
     const h1Ref = useRef(null);
 const inputHandler=()=>{


     timeRef.current.focus()
     timeRef.current.style.color="red"
     timeRef.current.placeholder="enter password"
 }
  const toogleHendeler=()=>{
    
      if(timeRef.current.style.display!="none"){
         timeRef.current.style.display="none"
      }else{
       timeRef.current.style.display="inline"
      }
  }
  const h1handelar=()=>{
    h1Ref.current.style.color="red"
  }
 return(
 <>
     <button onClick={toogleHendeler}>toggle</button>
    <input ref={timeRef} type="text"  placeholder="Enter User Name"/>
    <br></br>
     <br></br>
    <button onClick={inputHandler}>Sumbit</button>
    <h1 ref={h1Ref}>hello word</h1>
    <button onClick={h1handelar}>button</button>
 </>
 )
}
export default Useref;