import { Navbar ,Nav,NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import CardWidget from '../cardwidget/CardWidget'
import { Link }  from 'react-router-dom'
const NavBar = () => {
    return <>
  <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
  
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Navbar.Brand ><Link style={{color: "#FFFFFF", textDecoration: 'none'}} to={ '/'}>maxi</Link></Navbar.Brand>
      <Nav.Link href="#home">Nosotros</Nav.Link>
      <Nav.Link href="#link">Politicas</Nav.Link>
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link style={{color: "#232020", textDecoration: 'none'}} to={ '/category/1'}>Motherboard</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link style={{color: "#232020", textDecoration: 'none'}} className="link" to={'/category/2'}>Procesadores</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link style={{color: "#232020", textDecoration: 'none'}} className="link" to={ '/category/3'}>Placa de video</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link style={{color: "#232020", textDecoration: 'none'}} className="link" to={ '/category/4'}>Fuentes</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link style={{color: "#232020", textDecoration: 'none'}} className="link" to={ '/category/5'}>Gabinetes</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link style={{color: "#232020", textDecoration: 'none'}} className="link" to={ '/category/6'}>Discos de almacenamiento</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link style={{color: "#232020", textDecoration: 'none'}} className="link" to={ '/'}>Todas</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<CardWidget className="justify-content-end"/>
</Navbar>
<div className="separador"></div>

    </>
  }
  
  export default NavBar