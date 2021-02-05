import React, {useContext} from 'react'
import {Image} from "react-bootstrap"
import {CartContext} from '../../Context'
import ButtonRemove from '../Button/ButtonRemove'
const Cart = ({item , cantidad}) => {

const [llevar,setLlevar] = useContext(CartContext)


const removeItem = () =>{
  const newItem = llevar.filter((itenes) => itenes.item.id !== item.id )
  setLlevar(newItem)
  }   

  return (
    <React.Fragment>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td><Image fluid className="rounded" src={item.img}/></td>
      <td>{item.precio}</td>
      <td>{cantidad}</td>
      <td><ButtonRemove removeItem={removeItem}  texto={"Remover"} ></ButtonRemove></td>
    </tr>  

    </React.Fragment>
  )
      
}

export default Cart
