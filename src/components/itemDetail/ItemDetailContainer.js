import React from 'react'
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
const ItemDetailContainer = ({ items }) => {
  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    
    items.length &&
      items.map((item) => {
        return item.id === parseFloat(id) && setProducto(item);
      }) 

  }, [items])
  
  useEffect(()=>{
    items.length ? setLoading(false) : setLoading(true)
    },[items])

  return <React.Fragment>
    {
      loading ? (
        <Spinner animation="border" role="status"/>

      ):(
        <ItemDetail key={producto.id} item={producto}/>
      )
       

     }
    
      
      
    </React.Fragment>
  
}

export default ItemDetailContainer
