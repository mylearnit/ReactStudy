import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export const AddAccount = () => {
  let history = useHistory();
  const [branch, setBranch] = useState("");
  const [ac_no, setAcNo] = useState("");
  const [name, setName] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
        branch,
        ac_no,
        name,
    };
    let token = localStorage.getItem('token'); 
    
    axios.post("/sbi/account/", newAccount, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then((response) => {
      history.push("/");
    });
    
  };
  

  return (
    <Row>
      <Col xs={12} sm={4}>
      <Card body>
        <h1>Add Account</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name of account</Form.Label>
            <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
             />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Branch</Form.Label>
            <Form.Control
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            type="text"
            placeholder="Enter branch"
             />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
            value={ac_no}
            onChange={(e) => setAcNo(e.target.value)}
            type="text"
            placeholder="Enter account no"
             />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card>
      </Col>
    </Row>

  );
};