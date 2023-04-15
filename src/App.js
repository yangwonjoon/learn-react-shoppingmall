import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navbar, Container, Nav, Row, Col, Modal} from 'react-bootstrap'
import data from './data.js';
import Shoes from './Shoes.js'
import { useState } from 'react';

function App() {
  let [shoes, setshoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SHOES KREAM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#mens">MENS</Nav.Link>
            <Nav.Link href="#womens">WOMENS</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='mainbg'></div>
      <Container className='container'>
        <Row>
        {data.map(function(a, i){
          return(
            <Shoes i={i} shoes={shoes}/>
          )
        })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
