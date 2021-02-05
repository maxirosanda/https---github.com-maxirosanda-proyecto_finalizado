import React, { useEffect, useState } from 'react'
import Item from './Item'
import { useParams } from "react-router-dom"
import {Spinner} from 'react-bootstrap'

const ItemList= ({items}) => {
  const [loading,setLoading] = useState(false)
  const {categoryId}  = useParams() 
  console.log(categoryId)
   
  useEffect(()=>{
    items.length ? setLoading(false) : setLoading(true)
    },[items])
  
  return <React.Fragment> 
      
      <div className="container-fluid row m-0 p-0 px-3">
      {
      loading ? (
        <Spinner animation="border" role="status"/>

      ):(

        items.length && items.map((item) => {
          if(categoryId){
    
          if(item.id_categoria == parseFloat(categoryId)){
              return <Item key = {item.id} item = {item} > </Item> }else{}
            }else{
          return <Item key = {item.id} item = {item} > </Item>
    
        }
     })
      )
       

     }
     </div>
  </React.Fragment>
  }
  
  export default ItemList 
  