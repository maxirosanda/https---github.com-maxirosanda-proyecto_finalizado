import React, {useContext, useState ,useEffect} from 'react'
import Carrito from '../../assets/CardWidget.png'
import { Col, Image, Row } from 'react-bootstrap'
import {CartContext} from '../../Context'
const CardWidget = () => {
  const [llevar,setLlevar] = useContext(CartContext)
  const [sumar,setSumar] = useState(0);
  
    useEffect(() => {
      setSumar(0)
      llevar.length &&
        llevar.map((itenes) => {
          setSumar(sumar + itenes.cantidad)
        })
    }, [llevar])

  console.log(llevar) 
  return (
    <React.Fragment>
      <Row className='row justify-content-end'>
        <Col xs={12} lg={8} className='row justify-content-center'>
          <Image fluid className='rounded' src={Carrito} />
         <h3>{sumar}</h3>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default CardWidget 
