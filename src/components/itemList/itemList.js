import Item from '../Item/Item'
import { useParams } from "react-router-dom";

const ItemList= ({items}) => {
  const {categoryId}  = useParams() 
  console.log(categoryId)
    return <React.Fragment> 
  
      <div className="container-fluid row m-0 p-0 px-3">
      {
       
    items.length && items.map((item) => {
      if(categoryId){

      if(item.id_categoria == parseFloat(categoryId)){
          return <Item key = {item.id} item = {item} > </Item> }else{}
        }else{
      return <Item key = {item.id} item = {item} > </Item>

    }
 })
     }
     </div>
  </React.Fragment>
  }
  
  export default ItemList 
  