import React from "react";
import Jumbo from "../../components/Jumbo";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
const Home  = () => (
<div>
    
    
    < Nav />
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>mow-me</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          
            <Jumbo />
          
        </Col>
      </Row>
    </Container>
    



</div>
);

export default Home;


