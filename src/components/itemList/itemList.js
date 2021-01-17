import Item from '../item/Item'

const ItemList= () => {
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

    const findItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            arreglo.length ? resolve(arreglo) : resolve("no hay items")
        }, 3000)
})

    return <>
<Item 
   datos = { findItems.then((resolve) => {
   return resolve
}).catch((erro)=>  {

    return erro

}
)}
>

</Item>

    </>
  }
  
  export default ItemList


