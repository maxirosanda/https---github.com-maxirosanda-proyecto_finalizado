import React from 'react'
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
import {getFirestore} from '../../firebase/index'

const ItemDetailContainer = () => {
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
    console.log("paso por el segundo effect")
   producto.id != undefined && setLoading(false)
    },[producto])

  return <React.Fragment> 
      
<div className="container-fluid row m-0 p-0 px-3">
{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
      <ItemDetail key={producto.id} item={producto}/>)}

</div>
</React.Fragment>
}

export default ItemDetailContainer
