import { Container, Row, Col } from "react-bootstrap";

var year = new Date().getFullYear()

export const Footer = () => {
  return (
    <div className="footer">
      <Container style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Row>
          <Col xs={6} className="mr-2 text-center, mobile-hide">
            <div>
              <h2>piero</h2>
              <b>delorenzis</b>
            </div>
          </Col>
          <Col xs={6} className="ml-2 text-center" style={{marginTop: '20px'}}>
            <p>Copyright &copy; {year} Piero De Lorenzis. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
