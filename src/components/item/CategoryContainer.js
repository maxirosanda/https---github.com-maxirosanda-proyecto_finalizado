import React from 'react'
import Item from "./Item"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getFirestore} from '../../firebase/index'
import {Spinner} from 'react-bootstrap'
const CategoryContainer = ({}) => { 
  
 const { categoryid } = useParams()
 const [items, setItems] = useState({})
 const [loading,setLoading] = useState(false) 

  useEffect(() => {
  let db =getFirestore()
  let itemsFirebase =db.collection("items")
  let categoryItems = itemsFirebase.where("categoria_id","==",categoryid)
  
  categoryItems.get()
    .then((querySnapshot)=>{
        querySnapshot.size === 0 && console.log("no hay items")
        setItems(querySnapshot.docs.map(doc =>doc.data()))
    }).catch((erro) => {
      return erro
    })
    },[categoryid])

    useEffect(()=>{
      items.length ? setLoading(false) : setLoading(true)
      },[items])

    return (
      <React.Fragment>
        <div className="container-fluid row m-0 p-0 px-3">
        { 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
       items.length && items.map((item) => {
             return <Item key = {item.id} item = {item} > </Item>
            })) }  
        </div>
      </React.Fragment>
    )

}
export default CategoryContainer
