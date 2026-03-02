import Collage from "./collage";
import Pargent from "./pargent";
function Nested(){
const Collagedata=[
    {
    name: 'IIt Alwar',
    city:'Alwar',
    webside:'iet.com',
    Student:[
        {
     name: "anail sidu",
     age: 20,
     email: "musraf@gmail.com"
        },
         {
     name: "akash shrama",
     age: 30,
     email: "akash@gmail.com"
        },
         {
     name: "suresh varma",
     age: 40,
     email: "sureash@gmail.com"
        }
        
    ]
    },
    {
        name: 'IIT Dehli',
        city: "Dehli",
        webside: 'iet.com'
    },
    {
    name: 'IIT Hisar',
    city: 'Hisar',
    webside: 'iet.com'
    }
]
return(
<div>
<h1>nested loop in javascript</h1>
{ 
     Collagedata.map((collage,index)=>(
    //   Collage.Student && Collage.Student.map((Student) => (
    <div key={index}>
    <Collage Collage={Collage} />
    <Pargent />
    {/* <h1>Name:{collage.name}</h1>
    <ul>
    <li>
    <h3>city:{collage.city}</h3>
    </li>
    <li>
    <h3>webside:{collage.webside}</h3>
    </li>
    </ul> */}
    </div>
    ))
}
</div>
)
}
export default Nested;