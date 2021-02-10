import React , { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
import {getFirestore} from '../../firebase/index'
import {useCartContext} from '../../Context'


const ItemDetailContainer = () => {
  const {llevar,setTerminar} = useCartContext()
  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
setLoading(true)
const db = getFirestore()
const itemCollection = db.collection("items")
const item =itemCollection.doc(id)
item.get()
.then((doc)=>{
  !doc.exists === 0 && console.log("no hay items")  
setProducto(
  {
    id: doc.id,
    ...doc.data()
  }
)
}
).catch((erro) => {
  return erro
})
  },[])

  useEffect(()=>{
   producto.id != undefined && setLoading(false)
    },[producto])

    useEffect(() => {
      setTerminar(false)
      llevar.length &&
        llevar.map((itenes) => {
        if(itenes.item.id ==producto.id){
            setTerminar(true)
          }
        })
     },[producto])
    

  return <React.Fragment> 
      
<div className="container-fluid row m-0 p-0 px-3">
{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
       <ItemDetail key={producto.id} item={producto} />

 )}
</div>
</React.Fragment>
}

export default ItemDetailContainer
