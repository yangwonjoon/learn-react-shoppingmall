import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='mainbg'></div>
    </div>
  );
}

export default App;
