import React ,{useContext, useState,useEffect} from 'react'
import Cart from './Cart'
import { Table} from "react-bootstrap"
import {CartContext} from '../../Context'
import ButtonSeguir from '../Button/ButtonSeguir'
const ItemList= () => {
const [llevar,setLlevar] = useContext(CartContext)
const [sumar,setSumar] = useState(0)
useEffect(() => {
  setSumar(0)
  llevar.length &&
    llevar.map((itenes) => {
      setSumar((sumar)=>{ 
        return sumar + itenes.item.precio * itenes.cantidad})
    })
}, [llevar])

   return <React.Fragment> 
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre Articulo</th>
      <th>Foto</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th></th>
    </tr>
  </thead>
  <tbody>

      {
       
    llevar.length ? (  llevar.map((itenes) => {
        return   <Cart  item = {itenes.item} cantidad={itenes.cantidad} > </Cart>}) )
         : (  <h2>No hay items en el carrito</h2> )
        

    }
    <tr>
      Precio Final del Carrito : 
       {sumar}   
    </tr>
    </tbody>
</Table>
<ButtonSeguir ></ButtonSeguir>
  </React.Fragment>
  }
  
  export default ItemList 
  