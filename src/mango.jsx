

// import { useState } from "react";
// function Fouter() {
//     const [fruit, setFruit] = useState("Apple");
//     const hundlefruit = () => {
//         setFruit("banana")
//     }
//     console.log(fruit);

//     return <div>
//         <h1>hello every body</h1>
//         <h1>{fruit}</h1>
//         <button onClick={hundlefruit}>change furit </button>
//     </div>
// }
// export default Fouter;
import { useState } from "react";
import Counter from "./counter";
function Hello() {
    const [fruit, setFruit]=useState("Apple")
    const hendlefruit=()=>{
       setFruit('green')
    }
    console.log(fruit);
    return<div>
    <h1>hello bodeys</h1>
    <h1>{fruit}</h1>
    <button onClick={hendlefruit}>change furit</button>
    <Counter />

    </div>
} 
export default Hello;  