import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Nav from "../components/Nav";
import Login from "../components/Login";


const About  = () => (
    <div>
        
        
        < Nav />
        <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1><center><strong>Log In</strong></center></h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          
            <Login />
          
        </Col>
      </Row>
    </Container>
    
    
    </div>
    );
    
    export default About;
    


