import Table from "./table";
import Cloge from "./cloge";
import Student from "./student"
function Hello(){
let clogename=['handi','english','math','science']
    
// let name="Anail sidu";
return(
 <div>
    <h1>user componet</h1>
    <hr></hr>
    <Table name={"musraf sidu"} test={"shakir"} age={290} />
        <Table name={"musraf sidu"} test={"shakir"} age={290} />    
     <Cloge name={clogename} /> 
     <Student />


 </div>
)
}
export default Hello; 