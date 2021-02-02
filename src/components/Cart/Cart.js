import React from 'react'
import {Image} from "react-bootstrap"

const Cart = ({item , cantidad}) => {
console.log(item)
    
  return (
    <React.Fragment>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td><Image fluid className="rounded" src={item.img}/></td>
      <td>{item.precio}</td>
      <td>{cantidad}</td>
    </tr>  

    </React.Fragment>
  )
      
}

export default Cart
