import ProductoContainer from '../productoContainer/ProductoContainer'
import ItemList from '../itemList/itemList'
const ItemListContainer = ({texto , children}) => {

    
    return <>
<h1>{texto}</h1>
{children}
<ProductoContainer></ProductoContainer>
<ItemList></ItemList>
    </>
  }
  
  export default ItemListContainer