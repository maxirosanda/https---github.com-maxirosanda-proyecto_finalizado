import { Card,Button } from 'react-bootstrap'
import { Link }  from 'react-router-dom'
const Item = ({item}) => {
  
 return <>

<Card className='col-lg-3 col-md-4 col-sm-6 col-12' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.img}/>
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
      El precio del producto es de $  {item.precio} y puede abonarlo en 18 cuotas sin interes con todas las tarjetas de credito
    </Card.Text>
   <Link to={ `/item/${item.id}`}> <Button variant="primary">Comprar</Button></Link>
  </Card.Body>
</Card>
 </>
}
export default Item