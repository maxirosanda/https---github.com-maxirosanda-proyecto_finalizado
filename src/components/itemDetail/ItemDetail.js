import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import ContadorContainer from "../Contador/ContadorContainer"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
  return (
    <React.Fragment>
      <Container fluid className="mb-20 mt-5">
        <Row>
          <Col xs={12} lg={6} className="row justify-content-center">
            <Image fluid className="rounded" src={item.img} />
          </Col>
          <Col xs={12} lg={6} className=" align-self-center">
            <h2 className="text-center"> {item.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col xs={12} className="mt-4">
                <h2 className="text-center ">Precio ${item.precio}</h2>
              </Col>
              <Col xs={12} className="my-4  row justify-content-center">
                <ContadorContainer item={item} ></ContadorContainer>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="text-center">
            {item.descripcion}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
export default ItemDetail
