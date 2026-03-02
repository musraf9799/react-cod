import User from "./user1";

function Sum(){
const userName=['anail','sam','peater'];
const userData=[
{
name: 'anail',
age: '29',
email: 'anail@gmail.com',
id:1
},
{
name: 'sam',
age: '50',
email: 'saml@gmail.com',
id:2
},
{
name: 'peater',
age: '55',
email: 'peater@gmail.com',
id:3
}
]
return(
<div>
<h1>loop in jsx</h1>
<table border="1">
<thead>
    <tr>
    <td>id</td>
     <td>Name</td>
      <td>email</td>
       <td>age</td>
    </tr>
</thead>
<tbody>
    {
        userData.map((user)=>(
             <tr>
    <td>{user.id}</td>
     <td>{user.name}</td>
      <td>email</td>
       <td>age</td>
    </tr>
        ))
    }
</tbody>
</table>
<h1>recuse componet in loop</h1>
{
 userData.map((data)=>(
 <div key={User.id}>
    <User data={data} />
 </div>
 ))
}
</div>
)
}
export default Sum;