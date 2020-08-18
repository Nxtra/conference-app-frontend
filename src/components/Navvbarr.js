import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Navvbarr = ({history}) => {

  const goHome = () => {
    console.log(history)
    history.push("/");
  };

  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Learnings</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">List</Nav.Link>
          <Nav.Link href="/new">New</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
  );
};

export default withRouter(Navvbarr);
