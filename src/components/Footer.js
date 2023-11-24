import { Container, Row, Col } from "react-bootstrap";

var year = new Date().getFullYear()

export const Footer = () => {
  return (
    <div className="footer">

        <Row className="text">
          <Col className="column">
            <div>
              <h2>piero</h2>
              <b>delorenzis</b>
            </div>
          </Col>
          <Col className="column">
            Copyright &copy; {year} Piero De Lorenzis. All Rights Reserved
          </Col>
        </Row>

    </div>
  )
}
