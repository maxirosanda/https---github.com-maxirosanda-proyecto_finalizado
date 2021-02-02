import React , {useState,useContext , useEffect} from "react"
import Contador from '../Contador/Contador'
import ButtonTerminar from '../Button/ButtonTerminar'
import ButtonSeguir from '../Button/ButtonSeguir'
import ButtonRemove from '../Button/ButtonRemove'
import ButtonClear from '../Button/ButtonClear'
import {CartContext} from '../../Context'

const ContadorContainer = ({ item }) => {
  const [llevar,setLlevar] = useContext(CartContext) 
  const [cantidadprovisoria,setCantidadprovisoria] = useState(1)
  const [maximo] = useState(item.stock)
  const [terminar, setTerminar] = useState(false);
  const subirCantidad = () => {
    cantidadprovisoria < maximo && setCantidadprovisoria(cantidadprovisoria + 1)
  }
  const bajarCantidad = () => {
    cantidadprovisoria > 1 && setCantidadprovisoria(cantidadprovisoria - 1)
  }
 /*contextos*/
  const addItem = () =>{
  setLlevar([...llevar , {item,cantidad: cantidadprovisoria , encarro: true}])
  }

const removeItem = () =>{

  const newItem = llevar.filter((itenes) => itenes.item.id !== item.id )
  setLlevar(newItem)
  setTerminar(false)
  }

  const clearItems = () =>{
    setTerminar(false)
    setLlevar([])
    
    }

    
  useEffect(() => {
    llevar.length &&
      llevar.map((itenes) => {
        if(itenes.item.id == item.id){
          setTerminar(true)
        }
      })
  }, [llevar])
/* fin contexto*/
  if (terminar == false){
  if (maximo > 0) {
    return (
      <React.Fragment>
        <Contador
          cantidad={cantidadprovisoria}
          bajarCantidad={bajarCantidad}
          subirCantidad={subirCantidad}
          addItem={addItem}

        ></Contador>
        <ButtonSeguir ></ButtonSeguir>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h2>no hay stock lo sentimos mucho</h2>
        <ButtonSeguir ></ButtonSeguir>
      </React.Fragment>
    )
  }
}else{
  return (
    <React.Fragment>  
<ButtonTerminar ></ButtonTerminar>
<ButtonRemove removeItem={removeItem} ></ButtonRemove>
<ButtonClear clearItems={clearItems}></ButtonClear>
<ButtonSeguir ></ButtonSeguir>
</React.Fragment>
    )
}
}

export default ContadorContainer
