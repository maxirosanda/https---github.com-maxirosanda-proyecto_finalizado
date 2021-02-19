import React from 'react'
import {Image} from "react-bootstrap"
import {useCartContext} from '../../Context'
import ButtonFuncion from '../Button/Button'
const Cart = ({item , cantidad}) => {
  
  const {removeItem} = useCartContext() 
  
  return (
    <React.Fragment>
    <tr>
      <td>{item.id}  <ButtonFuncion funcionClick={() =>{removeItem(item.id)}}  texto={"Remover"} ></ButtonFuncion></td>
      <td>{item.nombre}</td>
      <td><Image fluid className="rounded" src={item.img}/></td>
      <td>{item.precio}</td>
      <td>{cantidad} </td>
    </tr>  
   
    </React.Fragment>
  )
      
}

export default Cart
