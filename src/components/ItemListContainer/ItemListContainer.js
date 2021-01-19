/* import ProductoContainer from '../productoContainer/ProductoContainer' */
import ItemList from '../itemList/itemList'
import { useState , useEffect } from "react";
const ItemListContainer = ({/*texto , children*/}) => {
    const [items , setItems] = useState({})
    const arreglo = [
        {
            id: 0,
            name: 'zapatilla',
            precio: 2700, 
            stock: 55 },
         {
            id: 1, 
            name: 'Remera',
            precio: 700, 
            stock: 67 },
        {
            id: 2, 
            name: 'Jean',
            precio: 3700, 
            stock: 71 
        }
    ]
    

useEffect(() =>{
    
    const findItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            arreglo.length ? resolve(arreglo) : resolve("no hay items")
        }, 3000)
})


    findItems.then((resolve) => {
        console.log(resolve)
            return setItems(resolve)
        }).catch((erro)=>  {
 
        return erro
        })
},[])
  
useEffect(() =>{
console.log(items)
},[items])
  
return <>

<ItemList items = { items}></ItemList>
</>
 /*   
    return <>
 
<h1>{texto}</h1>
{children}
<ProductoContainer></ProductoContainer>

    </>
  
 */ 
}
  export default ItemListContainer