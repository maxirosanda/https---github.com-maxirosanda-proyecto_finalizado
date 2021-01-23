import { Navbar ,Nav,NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import CardWidget from '../cardwidget/CardWidget'
import { Link }  from 'react-router-dom'
const NavBar = () => {
    return <>
  <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
  <Navbar.Brand ><Link to={ '/'}>maxi</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Nosotros</Nav.Link>
      <Nav.Link href="#link">Politicas</Nav.Link>
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link to={ '/category/1'}>Motherboard</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={'/category/2'}>Procesadores</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={ '/category/3'}>Placa de video</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={ '/category/4'}>Fuentes</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={ '/category/5'}>Gabinetes</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={ '/category/6'}>Discos de almacenamiento</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={ '/'}>Todas</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
<CardWidget>

</CardWidget>
</Navbar>
<div className="separador"></div>

    </>
  }
  
  export default NavBar