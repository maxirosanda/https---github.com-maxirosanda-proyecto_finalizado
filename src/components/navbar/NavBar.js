import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "./NavBar.css"
import CardWidget from "../Cardwidget/CardWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
 
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand>
              <Link
                style={{ color: "#FFFFFF", textDecoration: "none" }}
                to={"/"}
              >
                maxi
              </Link>
            </Navbar.Brand>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Politicas</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/category/1"}
              >
                Motherboard
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/category/2"}
              >
                Procesadores
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/category/3"}
              >
                Placa de video
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/category/4"}
              >
                Fuentes
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/category/5"}
              >
                Gabinetes
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/category/6"}
              >
                Discos de almacenamiento
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/"}
              >
                Todas
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <CardWidget className="justify-content-end" /> 
      </Navbar>
      <div className="separador"></div>
    </React.Fragment>
  )
}

export default NavBar