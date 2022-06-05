import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export const Heading = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to="/" className='navbar-brand'>SBI Challan</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/addaccount">Add Account</Nav.Link>
          <Nav.Link as={NavLink} to="/">Accounts</Nav.Link>
          <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
};