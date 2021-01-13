import Producto from '../producto/Producto'

import { useState } from "react";
const ProductoContainer = () => {
    let inicial =1
    const [cantidad , setCantidad] = useState(inicial)
    const [stock] = useState(12)
    const subirCantidad = () =>{
        cantidad < stock &&
        setCantidad(cantidad + 1)
    }
    const bajarCantidad = () =>{
        cantidad > 1 &&
        setCantidad(cantidad - 1)
    }
    return <>
<Producto mstock = {stock} cantidad = {cantidad} bajarCantidad ={ bajarCantidad}   subirCantidad ={ subirCantidad}></Producto>
    </>
  }
  
  export default ProductoContainer


