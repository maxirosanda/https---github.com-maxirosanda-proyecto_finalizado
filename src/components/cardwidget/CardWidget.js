import Carrito from "../../assets/CardWidget.png";
import { Col, Image, Row } from "react-bootstrap";

const CardWidget = () => {
  return (
    <React.Fragment>
      <Row className="row justify-content-end">
        <Col xs={12} lg={8} className="row justify-content-center">
          <Image fluid className="rounded" src={Carrito} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CardWidget;
