import React from 'react'
import { Card } from "react-bootstrap"
import ButtonLink from '../Button/ButtonLink'

const Item = ({ key , item }) => {

  return (
    <React.Fragment>
      <Card
        className="col-lg-3 col-md-4 col-sm-6 col-12"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            El precio del producto es de $ {item.precio} y puede abonarlo en 18
            cuotas sin interes con todas las tarjetas de credito
          </Card.Text>
          <ButtonLink texto='Comprar' link={`/item/${item.id}`}></ButtonLink>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}
export default Item
