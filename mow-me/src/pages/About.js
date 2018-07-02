import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Nav from "../components/Nav";
import AboutUs from "../components/AboutUs";


const About  = () => (
    <div>
        
        
        < Nav />
        <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1><center>Meet the Team</center></h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          
            <AboutUs />
          
        </Col>
      </Row>
    </Container>
    
    
    </div>
    );
    
    export default About;
    


