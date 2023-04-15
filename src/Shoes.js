import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navbar, Container, Nav, Row, Col, Modal} from 'react-bootstrap'

function Shoes(props){
  return(
    <>
          <Col className='col'>
            <img src={process.env.PUBLIC_URL+ "/img/shoes"+(props.i+1)+".png"} width="80%"/>
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
            <p>{props.shoes[props.i].price}</p>
          </Col>      
    </>
  )
}

export default Shoes