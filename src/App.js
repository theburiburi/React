/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]); 
  // state
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style = {{color : 'red', fontSize : '16px'}}>ReactBlog</h4>
      </div>

      <button onClick={() => {

        let arr = [1,2,3];
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}> 글수정 </button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      {
        글제목.map(function(제목, i){
          return (      
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(!modal); setTitle(i)}}> {글제목[i]} 
                <span onClick={ (e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}>👍</span> {따봉[i]} 

              </h4>
              <p> 2월 17일 발행 </p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
              
            </div>
            )
        })
      }
      <input onChange={(e)=>{ 입력값변경(e.target.value) }}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글발행</button>

      {
        modal == true ? <Modal color={'skyblue'} title={title} 글제목변경={글제목변경} 제목={글제목}/> : ''
      }
    </div>
  );
}



function Modal(props){
  return (
    <>
      <div className="list" style={{background : props.color}}>
        <h4>{props.제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=> { props.글제목변경(['여자코트 추천','강남 우동맛집','파이썬 독학']) }}>글수정</button>
      </div>
    </>
  )
}
// const Modal = () => {
//   return(

//   )
// }


// class Modal2 extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }
//   render(){
//     return(
//       <div> 
//         안녕 {this.state.name} 너 나이 {this.state.age}
//         <button onClick={()=>{
//           this.setState({name : 'cho'})
//         }}>버튼</button>
//       </div>
//     )
//   }
// }

export default App;
