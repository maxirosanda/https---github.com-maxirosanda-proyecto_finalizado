import React from 'react'
import Contador from '../Contador/Contador'
import { useState } from 'react'
import ButtonTerminar from '../ButtonTerminar/ButtonTerminar'

const ContadorContainer = ({ stock }) => {
  let inicial = 1
  const [cantidad, setCantidad] = useState(inicial);
  const [maximo] = useState(stock)
  const [terminar, setTerminar] = useState(false);
  const subirCantidad = () => {
    cantidad < maximo && setCantidad(cantidad + 1)
  }
  const bajarCantidad = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleComprar = () =>{
  setTerminar(true)

  }
  if (terminar == false){
  if (stock > 0) {
    return (
      <React.Fragment>
        <Contador
          cantidad={cantidad}
          bajarCantidad={bajarCantidad}
          subirCantidad={subirCantidad}
          handleComprar={handleComprar}
        ></Contador>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h2>no hay stock lo sentimos mucho</h2>
      </React.Fragment>
    )
  }
}else{
  return (
    <React.Fragment>  
<ButtonTerminar></ButtonTerminar>
</React.Fragment>
    )
}
}

export default ContadorContainer
