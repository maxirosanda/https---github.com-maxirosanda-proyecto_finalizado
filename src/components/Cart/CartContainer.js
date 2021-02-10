import React ,{useState}  from 'react'
import Cart from './Cart'
import Formulario from './Formulario'
import { Table} from "react-bootstrap"
import {useCartContext} from '../../Context'
import ButtonLink from '../Button/ButtonLink'
import {getFirestore} from '../../firebase/index'
import ButtonFuncion from '../Button/Button'

const CartContainer= () => {

const {llevar,preciofinal,setLlevar,nombre,setNombre,setTel,tel,setEmail,email} = useCartContext()
const [orden ,setOrden] = useState(null)
const [ordenid ,setOrdenid] = useState('')
var d = new Date();



const confirmarCompra = () => {
const db =getFirestore()
const ordenDb = db.collection("orders")
ordenDb.add(orden)
.then(({id}) =>{
    setOrdenid(id)
// comienza traer stock    
    const itemsDb = db.collection("items")
    llevar.map((itenes) => {
      
      
      const item =itemsDb.doc(itenes.item.id)
      item.get()
      .then((doc)=>{
        !doc.exists === 0 && console.log("no hay items")
        console.log(doc.data().stock)  

      let documento = itemsDb.doc(itenes.item.id)
      documento.update({stock: doc.data().stock - itenes.cantidad } )
      }
      ).then(()=>{
        
      }).catch((erro) => {
        return erro
      })

    
     
    })
// fin traer stock    
}).catch((e) =>{
console.log("ocurrio el error :" , e)
}).finally( setLlevar([]))
}


const tomandoDatos = (e) =>{

  if (e.target.name=="nombre"){
  setNombre(e.target.value)
}

if (e.target.name=="tel"){
  setTel(e.target.value)
}
if (e.target.name=="email"){
  setEmail(e.target.value)
}

}


const clickFormulario = (e) => {
  e.preventDefault()
  setOrden( { buyer: {nombre: nombre,
                      telefono: tel,
                      email: email
            },
              items: llevar,
              date: `${d.getDate()} / ${1 + d.getMonth()} / ${ d.getFullYear()}`,
             total: preciofinal
            }
  )
}


   return <React.Fragment> 
  {
     !ordenid  && (
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
       {preciofinal}   
    </tr>
    </tbody>
</Table>
     )}
<ButtonLink texto="Seguir comprando" link="./" ></ButtonLink>
{
  orden ? ( !ordenid && <ButtonFuncion funcionClick={confirmarCompra}  texto={"Terminar compra"} />)
   :( <Formulario clickFormulario={clickFormulario} tomandoDatos={tomandoDatos} ></Formulario> ) 
  

}

{ordenid && <h2>{ordenid}</h2>}

  </React.Fragment>
  }
  
  export default CartContainer
  