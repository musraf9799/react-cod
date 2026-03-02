function Header() {
function callFun(){
  alert("function called")
}
 const Furit=()=>{
  alert('Bansns')

 }
  return <div>
    <h4>Importent and exporting components</h4>
       <button onClick={Furit}>Click me</button>
  </div>
}
export function profile() {
  return <div>
    <h1>profile</h1>
  </div>
}

export default Header;
