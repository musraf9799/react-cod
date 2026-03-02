import { useEffect } from "react";

const  Counter2  = ({count,data})=>{
 const handleCounter=()=>{
   console.log("hundle Counter called");
 }
 const handledata=()=>{
   console.log("handle data called");
 }
  useEffect(()=>{
    handleCounter();
  },[])
  useEffect(()=>{
  handledata();
  },)
   return <>
   
   <h1>counter value {count}</h1>
    <h2>Data value {data}</h2>
   </>
}
export default Counter2;