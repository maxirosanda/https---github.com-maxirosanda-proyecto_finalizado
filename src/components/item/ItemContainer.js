import React, { useEffect, useState } from 'react'
import Item from './Item'
import {Spinner} from 'react-bootstrap'
import {getFirestore} from '../../firebase/index'

const ItemList= () => {
  const [loading,setLoading] = useState(false)
  const [items, setItems] = useState({})

  useEffect(() => {
    let db =getFirestore()
    let itemsFirebase =db.collection("items")
    itemsFirebase.get()
      .then((querySnapsshot)=>{
          querySnapsshot.size === 0 && console.log("no hay items")
          let arrayItems =querySnapsshot.docs.map((doc)=>{
            return({
              id: doc.id,
              ...doc.data()
            })
          })

          setItems(arrayItems)
      }).catch((erro) => {
        return erro
      })
      },[])
   
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
             return <Item key = {item.id} item = {item} > </Item>
        }))
     }
     </div>
  </React.Fragment>
  }
  
  export default ItemList 
  