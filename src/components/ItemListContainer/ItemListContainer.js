import ProductoContainer from '../productoContainer/ProductoContainer'

const ItemListContainer = ({texto , children}) => {
    return <>
<h1>{texto}</h1>
{children}
<ProductoContainer></ProductoContainer>
    </>
  }
  
  export default ItemListContainer