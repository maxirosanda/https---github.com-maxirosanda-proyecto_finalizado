import React from 'react'
import { Button, Col } from 'react-bootstrap'

const Contador = ({ cantidad, bajarCantidad, subirCantidad,addItem }) => {

  return (
    <React.Fragment>
      <Col
        xs={4}
        md={4}
        lg={3}
        xl={2}
        className=' row justify-content-center align-self-center'
      >
        <Button onClick={subirCantidad} className='btn btn-light'>
          <Col>+</Col>
        </Button>
      </Col>
      <Col
        xs={4}
        md={3}
        lg={3}
        xl={2}
        className=' row justify-content-center align-self-center'
      >
        <h2>{cantidad}</h2>
      </Col>
      <Col
        xs={4}
        md={4}
        lg={3}
        xl={2}
        className=' row justify-content-center align-self-center'
      >
        <Button onClick={bajarCantidad} className='btn btn-light'>
          <Col>-</Col>
        </Button>
      </Col>

      <Col
        xs={3}
        md={3}
        lg={3}
        xl={3}
        className=' my-4 row justify-content-center align-self-center'
      >
        <Button onClick={addItem} className=' row justify-content-center align-self-center'>
          Carrito
        </Button>
      </Col>
      
    </React.Fragment>
  )
}

export default Contador 
