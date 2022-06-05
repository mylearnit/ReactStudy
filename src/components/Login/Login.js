import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    axios.post('api-token-auth/',{username, password})
      .then(function (res) {
          console.log('login res--------', res);
          if (res) {
              localStorage.setItem('token', res.data.token); 
              window.location.reload();
          } else {
              console.log('error');
          }
      })
      .catch(function (error) {
          console.log(error);
          alert('Invalid Credentials')
      });
  }
  return(
    <div className="container">
      
      <Row>
        <Col xs={12} sm={{ span: 4, offset: 4 }}>
        <Card body>
          <h1>Please Log In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Card>
        </Col>
      </Row>
      
    </div>
  )
}

