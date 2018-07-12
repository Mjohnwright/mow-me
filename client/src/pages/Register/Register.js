import React from "react";
import RegisterForm from "../../components/RegisterForm";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

const Register  = () => (
    
    <div>
        <Nav />
        <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To MowMe!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          
            <RegisterForm />
          
        </Col>
      </Row>
    </Container>
    
    </div> 
    
    );

export default Register;