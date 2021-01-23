import Producto from '../contador/Contador'

import { useState } from "react";
const ProductoContainer = ({stock}) => {
    let inicial =1
    const [cantidad , setCantidad] = useState(inicial)
    const [maximo] = useState(stock)
    const subirCantidad = () =>{
        cantidad < maximo &&
        setCantidad(cantidad + 1)
    }
    const bajarCantidad = () =>{
        cantidad > 1 &&
        setCantidad(cantidad - 1)
    }
    if(stock>0){
    return <>
<Producto  cantidad = {cantidad} bajarCantidad ={ bajarCantidad}   subirCantidad ={ subirCantidad}></Producto>
    </>
  }else { 
    return <>
      <h2>no hay stock lo sentimos mucho</h2>
      </>
}
  }
  
  export default ProductoContainer


