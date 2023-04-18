import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navbar, Container, Nav, Row, Button} from 'react-bootstrap'
import data from './data.js'
import Shoes from './Shoes.js'
import Detail from './pages/Detail.js'
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {
  let [shoes, setshoes] = useState(data);
  let navi = useNavigate()

  return (
    <div className="App">

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SHOES KREAM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navi('/')}}>HOME</Nav.Link>
            <Nav.Link href="#mens">MENS</Nav.Link>
            <Nav.Link href="#womens">WOMENS</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link onClick={()=> {navi('/detail')}}>DETAIL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='mainbg'></div>

      <Routes>
        <Route path="/" element={ 
        <div> 
          <Container className='container'>
            <Row>
                {data.map(function(a, i){
                  return(
                <Shoes i={i} shoes={shoes}/>
                  )
                })}
            </Row>
          </Container> </div> } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>
      </Routes>

      <Button onClick={()=>{
        let copy = [...shoes]
        copy.sort((a, b) => a.title.localeCompare(b.title)); //a,b를 비교하여 b가 어디에 와야하는지를 반환환
        setshoes(copy);
      }}>title 가나다순 정렬</Button>

    </div>
  );
}

export default App;
