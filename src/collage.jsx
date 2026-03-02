function Collage({Collage}){
    console.log(Collage);
    return(
        <div style={{
            backgroundColor: "#ccc",
            borderRadius: "10px",
            width: "250px",
            borderBottom: "2px solid #000"
        }}>
         
    <h1>Name:{Collage.name}</h1>
    <ul>
    <li>
    <h3>city:{Collage.city}</h3>
    </li>
    <li>
        <h3>student</h3>
        {
        Collage?.Student?.map((Student,i)=>(
     <ul>
        <li>Name: {Student.name}</li>
     </ul>
        ))
        }
    </li>
    <li>
    <h3>webside:{Collage.webside}</h3>
    </li>
    </ul>
    
        </div>
    )
}
export default Collage;