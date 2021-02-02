import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

const ButtonSeguir = () => {
  return (
    <React.Fragment>
      <Col
        xs={3}
        md={3}
        lg={3}
        xl={3}
        className=' my-4 row justify-content-center align-self-center'
      >
        <Link to={`/`}> <Button className=' row justify-content-center align-self-center'>
          Seguir comprando
        </Button></Link>
      </Col>
      
    </React.Fragment>
  )
}

export default ButtonSeguir
