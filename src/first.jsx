

 import "./App.css";
 import { EmpoylereData } from "./empoylere";
 import { useEffect, useState } from "react";
 import React from 'react';
 import Swal from 'sweetalert2';
 function First(){
 const [data, setData]=useState([]);

 useEffect(()=>{
 setData(EmpoylereData)
 },[])

 const hadleEdit = (id) =>{
     alert(id)
 }
 const hadleDelete = (id) =>{
     if(id > 0)
     {
         if(window.confirm("are you sure to deleate this item?"))
         {
     const dt = data.filter(item=>item.id !== id)
     setData(dt);
         }
     }
 }
 return(
 <div className="APP">
 <table className="table table-hover-hover">
  <thead>
 <tr>
 <td>sr.No</td>
 <td>Id</td>
 <td>First Name</td>
 <td>Last Name</td>
 <td>age</td>
 <td>Actions</td>

 </tr>
  </thead>
  <tbody>
 {
     data.map((item,index)=>{
     return(
    <tr key={index}>
    <td>{index+1}</td>
     <td>{item.id}</td>
       <td>{item.firstName}</td>
         <td>{item.lastName}</td>
           <td>{item.age}</td>
           <td>
          <button className="btn btn-primary" onClick={(e) => hadleEdit(item.id)}>Edit</button>&nbsp;
          <button className="btn btn-danger" onClick={(e) => hadleDelete(item.id)}>Delete</button>
           </td>
     </tr>
    
    )
     })
 }
  </tbody>
 </table>
 </div>
 );
 }
 export default First;


// // import "./App.css";
// // import { EmpoylereData } from "./empoylere";
// // import { useEffect, useState } from "react";
// // import React from 'react';
// // import Swal from 'sweetalert2';

// // function First() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     setData(EmpoylereData);
// //   }, []);

// //   // ✅ Edit button ke liye SweetAlert2
// //   const hadleEdit = (id) => {
// //     // Find the item from data
// //     const item = data.find((d) => d.id === id);

// //     Swal.fire("Hello");

// //     Swal.fire({
// //       title: 'Edit Item',
// //       html: `
// //         <p>ID: ${item.id}</p>
// //         <p>First Name: ${item.firstName}</p>
// //         <p>Last Name: ${item.lastName}</p>
// //         <p>Age: ${item.age}</p>
// //         <p>You can add a form here to edit.</p>
// //       `,
// //       icon: 'info',
// //       confirmButtonText: 'OK'
// //     });
// //   };

// //   // ✅ Delete button
// //   const hadleDelete = (id) => {
// //     Swal.fire({
// //       title: 'Are you sure?',
// //       text: "Do you want to delete this item?",
// //       icon: 'warning',
// //       showCancelButton: true,
// //       confirmButtonColor: '#d33',
// //       cancelButtonColor: '#3085d6',
// //       confirmButtonText: 'Yes, delete it!',
// //       cancelButtonText: 'Cancel'
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         const dt = data.filter(item => item.id !== id);
// //         setData(dt);

// //         Swal.fire(
// //           'Deleted!',
// //           'The item has been deleted.',
// //           'success'
// //         );
// //       }
// //     });
// //   };

// //   return (
// //     <div className="APP">
// //       <table className="table table-hover-hover">
// //         <thead>
// //           <tr>
// //             <td>Sr.No</td>
// //             <td>Id</td>
// //             <td>First Name</td>
// //             <td>Last Name</td>
// //             <td>Age</td>
// //             <td>Actions</td>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((item, index) => (
// //             <tr key={index}>
// //               <td>{index + 1}</td>
// //               <td>{item.id}</td>
// //               <td>{item.firstName}</td>
// //               <td>{item.lastName}</td>
// //               <td>{item.age}</td>
// //               <td>
// //                 <button className="btn btn-primary" onClick={() => hadleEdit(item.id)}>Edit</button>&nbsp;
// //                 <button className="btn btn-danger" onClick={() => hadleDelete(item.id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default First;