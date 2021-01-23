import {Button,Container,Row,Col,Image,C} from 'react-bootstrap'

const ItemDetail = ({item}) => {
 return <>
 <Container fluid >
   
<Row style={{ width: '18rem' }}> 
  <Col xs={6} >
    <Image fluid variant="top"  src={item.img} />
  </Col>  
  <Col xs={6} >
    {item.name}
  </Col>  
</Row>
<Row>
  <Col>
    <Row>
      <Col>Nuestro producto tiene un precio de ${item.precio} y lo podes pagar en 18 cuaotas sin interes</Col>
      <Col ><Button variant="primary">Comprar</Button></Col>
    </Row>
  </Col>
  <Col>
  {item.descripcion}
  </Col>
</Row>

</Container>
 </>
}
export default ItemDetail
