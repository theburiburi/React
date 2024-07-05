// import logo from './logo.svg';
/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 이미지 from './imag/shop6.jpeg'
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">


      <Navbar bg="dark" data-bs-theme="dark" className=''>
        <Container>
          <Navbar.Brand href="/">MainShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('about') }}>Home</Nav.Link>
            <Nav.Link href="detail">Detail</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
            <Nav.Link href="mypage">My Page</Nav.Link>
            <Nav.Link href="event">Event Page</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link> */}
      <Routes>
        <Route path="/" element={
          <>
            {/* <div className='main-bg' style={{ backgroundImage : 'url('+ 이미지 +')'}}></div> */}
            <div className='main-bg'></div>
            <div className="row">
        
            {/* <Card shoes={shoes[1]} i={2}></Card>
            <Card shoes={shoes[2]} i={3}></Card> */}
            { shoes.map((a, i)=>{
                return(
                  <Card shoes={shoes[i]} i={i}></Card>
                )
              })
            }
            </div>
          </>
        }/>
        <Route path='/detail' element={<Detail/>}/>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>조의재</div>}/>
          <Route path='location' element={<div>동국대학교 필동1가 30</div>}/>
        </Route>

        <Route path='/event' element={<EventPage/>}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path='two' element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        

        <Route path='*' element={<div>404</div>}/>
      </Routes> 


      {/* <Button variant="primary">뿡뿡이</Button> */}
    </div>
  );
}

function About(){
  return (
    <div>
      <h4> 회사 정보 </h4>
      <Link to="/about/member">구성원</Link>
      <br></br>
      <Link to="/about/location">위치 정보</Link> 
      <Outlet></Outlet>
    </div>
  )
}

function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Link to="/event/one">이벤트 1</Link> 
      <br/>
      <Link to="/event/two">이벤트 2</Link> 
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div class="col-sm">
      {/* <img src= {process.env.PUBLIC_URL + '/logo192.png'} width="30%"/> */}
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="30%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
