// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Availablehouses from './Availablehouses';


function App() {
  return (
    <>
      {/* <p>Hey there, welcome</p> */}
      <p>Niaje bro, karibu</p>
      <img width={'70%'} height={'70%'} src='https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='myImage'></img>
      <div>
      <h1>List of available houses</h1>
      <Availablehouses  title="events in your area"/>
      <p>lorem ipsum</p>
      <Availablehouses />
      </div>
     
    </>
  );
}

export default App;

// export function FirstComment(){
//   return (
   
//   )
// }

