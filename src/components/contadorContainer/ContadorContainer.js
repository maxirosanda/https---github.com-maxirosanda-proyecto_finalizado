import React , {useState,useContext} from "react"
import Contador from '../Contador/Contador'
import ButtonTerminar from '../ButtonTerminar/ButtonTerminar'
import {CartContext} from '../../CartContext'

const ContadorContainer = ({ stock }) => {
  const [cantidad,setCantidad] = useContext(CartContext) 
  const [cantidadprovisoria,setCantidadprovisoria] = useState(1)
  const [maximo] = useState(stock)
  const [terminar, setTerminar] = useState(false);
  const subirCantidad = () => {
    cantidadprovisoria < maximo && setCantidadprovisoria(cantidadprovisoria + 1)
  }
  const bajarCantidad = () => {
    cantidadprovisoria > 1 && setCantidadprovisoria(cantidadprovisoria - 1)
  }
  const handleComprar = () =>{
  setTerminar(true)
  setCantidad(cantidadprovisoria)

  }
 
  if (terminar == false){
  if (stock > 0) {
    return (
      <React.Fragment>
        <Contador
          cantidad={cantidadprovisoria}
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
<ButtonTerminar ></ButtonTerminar>
</React.Fragment>
    )
}
}

export default ContadorContainer
