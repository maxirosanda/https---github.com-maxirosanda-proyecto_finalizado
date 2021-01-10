import { Navbar } from 'react-bootstrap'
import { Nav} from 'react-bootstrap'
import CardWidget from '../cardwidget/CardWidget'
const NavBar = () => {
    return <>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Maxi e-commerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <CardWidget>

  </CardWidget>
</Navbar>
    </>
  }
  
  export default NavBar