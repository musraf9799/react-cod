//    import Button from 'react-bootstrap/Button';
//   import Alert from 'react-bootstrap/Alert';
   
// function Camele(){

// //  return(

// //       import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdow+n">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

//  export default BasicExample;

// <div>
// <h1>musraf dewra</h1>


//       <Alert variant="info">Hello, BT installed</Alert>
//       <Button onClick={()=>alert("bootstrap Button")} variant='danger'>bootstrap Button</Button>

// </div>
// // )
// }
// export default Camele;

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Camele() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>musraf dewra</h1>

      <Alert variant="info">
        Hello, BT installed
      </Alert>

      <Button onClick={() => alert("bootstrap Button")} variant="danger">
        bootstrap Button
      </Button>
    </div>
  );
}

export default Camele;