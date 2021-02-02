import React ,{useContext} from 'react'
import Cart from './Cart'
import { Table} from "react-bootstrap"
import {CartContext} from '../../Context'
import ButtonSeguir from '../Button/ButtonSeguir'
const ItemList= () => {
const [llevar,setLlevar] = useContext(CartContext)

   return <React.Fragment> 
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre Articulo</th>
      <th>Foto</th>
      <th>Precio</th>
      <th>Cantidad</th>
    </tr>
  </thead>
  <tbody>

      {
       
    llevar.length && llevar.map((itenes) => {
        return   <Cart  item = {itenes.item} cantidad={itenes.cantidad} > </Cart>

    })}
     
    </tbody>
</Table>
<ButtonSeguir ></ButtonSeguir>
  </React.Fragment>
  }
  
  export default ItemList 
  