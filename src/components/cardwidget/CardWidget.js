import React, {useContext} from 'react'
import Carrito from '../../assets/CardWidget.png'
import { Col, Image, Row } from 'react-bootstrap'
import {CartContext} from '../../CartContext'
const CardWidget = () => {
  const [cantidad,setCantidad] = useContext(CartContext)
  return (
    <React.Fragment>
      <Row className='row justify-content-end'>
        <Col xs={12} lg={8} className='row justify-content-center'>
          <Image fluid className='rounded' src={Carrito} />
          <h2>{cantidad}</h2>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default CardWidget 
