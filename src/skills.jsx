import { useState } from "react";
function Skills(){
const [skills, setskills] = useState(["java"]);
const handleskills = (event) => {
console.log(event.target.value);
}
  return (
    <div>
      <h1>handle checkbox in react js</h1>
      <input onChange={handleskills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">php</label>
     <br />
        <input type="checkbox" id="js" value="js" />
      <label htmlFor="js">js</label>
      <br />
        <input type="checkbox" id="node" value="node" />
      <label htmlFor="node">node</label>
      <br />
        <input type="checkbox" id="java" value="java" />
      <label htmlFor="java">java</label>
      <h1>{skills.toString()}</h1>
    </div>
  )
}

export default Skills;