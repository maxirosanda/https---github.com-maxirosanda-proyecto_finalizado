import Item from '../item/Item'
const ItemList= ({items}) => {
   



    return <>
      {
          
          items.length && items.map((item) => {
    return <Item key = {item.id} item = {item} > </Item>
 })
  
}</>
  }
  
  export default ItemList 
  