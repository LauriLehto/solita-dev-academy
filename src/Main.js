import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import Datatable from './components/Datatable'
const Main = () => {
  return (
    <Container fluid>
      <Navbar>
        <NavbarBrand>Solita Dev Akatemia</NavbarBrand>
      </Navbar>
      <Datatable />
    </Container>
  )
}

export default Main
