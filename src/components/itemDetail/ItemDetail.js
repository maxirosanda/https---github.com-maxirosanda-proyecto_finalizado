import {Container,Row,Col,Image} from 'react-bootstrap'
import ProductoContainer from '../productoContainer/ProductoContainer'
import './ItemDetail.css'
const ItemDetail = ({item}) => {
 return <>
 <Container fluid className="mb-20 mt-5" >
   
<Row> 
  <Col xs={6} className="row justify-content-center" >
    <Image fluid  className="rounded"  src={item.img} />
  </Col>  
  <Col xs={6} className=" align-self-center" >
   <h2 className="text-center"> {item.name}</h2>   
  </Col>  
</Row>
<Row>
  <Col>
    <Row >
      <Col xs={12} className="mt-4" ><h2 className="text-center ">Precio ${item.precio}</h2></Col>
      <Col xs={12} className="my-4  row justify-content-center" ><ProductoContainer stock={item.stock} ></ProductoContainer></Col>
      
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
