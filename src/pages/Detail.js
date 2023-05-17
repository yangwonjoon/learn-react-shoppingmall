import { Outlet, useParams } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

let Yellowbtn = styled.button`
  background : ${ props => props.bg}; 
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'}
`
//그냥 문법임 이해 ㄴㄴ

function Detail(props){

  useEffect(()=>{
    setTimeout(() => {
      setalert(false)
    }, 2000);
  })

  let [alert,setalert] = useState(true)
  let {id} = useParams();
  let changeshoes = props.shoes.find(function(x){
    return x.id == id
  }); //내가 생각했던거랑 달랐다 -> url은 고유 상품 url이어야되는듯 에어포스1이 /1 이면 뭐가 바껴도 /1은 에어포스페이지

  return(
    <>
    <div className="container">
      <div>
        {
          alert == true
          ? <Button>마감세일 2초후에 사라집니다</Button> 
          :null
        }
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{changeshoes.title}</h4>
          <p>{changeshoes.content}</p>
          <p>{changeshoes.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  </>
  )
}

export default Detail