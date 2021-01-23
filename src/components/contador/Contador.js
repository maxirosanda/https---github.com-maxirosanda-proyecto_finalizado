import {Button , Col } from 'react-bootstrap'
const Producto = ({cantidad,bajarCantidad,subirCantidad}) => {
	console.log(cantidad)
	return <>
            

						  <Col xs={2} className=" row justify-content-center align-self-center" >
						    	<Button onClick = {subirCantidad} className="btn btn-light" type="button" id="button-plus"> + </Button>
						   </Col >
						  <Col xs={2} className=" row justify-content-center align-self-center">
						  		<h2>{cantidad}</h2>
						  </Col>
						  <Col xs={2} className=" mr-3 row justify-content-center align-self-center" >
						    <Button onClick = {bajarCantidad} className="btn btn-light" type="button" id="button-minus"> − </Button>
						  </Col>
						  <Col xs={2} className="mr-3 row justify-content-center align-self-center">
						  <Button className=" row justify-content-center align-self-center" >Carrito</Button>
						  </Col>
						  <Col  xs={3}  className="row  align-self-center justify-content-center"><Button>Comprar</Button></Col>
	
    </>
  }
  
  export default Producto