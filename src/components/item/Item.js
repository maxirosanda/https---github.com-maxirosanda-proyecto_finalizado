
const Item = (datos) => {
     console.log(datos)
    return (
      <div>
        <h1>Productos </h1>
      <ul>
      {
     datos.map((item,indice) => {
       return <li key={indice}>{item.name} : $ {item.precio} </li>
    }
     )
     
      }
      </ul>
      </div>
      )
}
  export default Item