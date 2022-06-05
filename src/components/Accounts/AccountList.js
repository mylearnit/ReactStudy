import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  Logic } from '../Logic'

export const AccountList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        GetData()
    }, []);

    const GetData = () => {
        let response = Logic('get', '', '', "/sbi/account/") // (method, data, params, url)
        response.then((res) => {
            if (res.data) {
                setData(res.data.results)
            } else {
                setData([])
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <Row>
      <Col xs={12} sm={4}>
      {data.length > 0 ? (
        <ListGroup as="ol" numbered>
          {data.map((account) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={account.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{account.name}</div>
                Branch: {account.branch}
              </div>
              <Badge bg="primary" pill>
              {account.ac_no}
              </Badge>
              </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No data.</p>
      )}
      </Col>
    </Row>
  );
};



    
  