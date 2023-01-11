// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Availablehouses from './Availablehouses';
import {studentnames, Availablehouses}  from './Availablehouses'


function App() {
  // console.log(studentnames)

  // let myHouses = [
  //   { landlord:"Makumi", price:9000, bedrooms:10, ensuite:"yes"},
  //   { landlord:"Makumi", price:9000, bedrooms:10, ensuite:"yes"},
  //   { landlord:"Makumi", price:9000, bedrooms:10, ensuite:"yes"},
  //   { landlord:"Makumi", price:9000, bedrooms:10, ensuite:"yes"}
  // ]
  return (
    <>
      {/* <p>Hey there, welcome</p> */}
      <h1>Niaje bro, karibu</h1>
      <img width={'70%'} height={'70%'} src='https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='myImage'></img>
      <div>
      
      {/* //change landlord, change price */}
      <Availablehouses landlord={"Mr Maploti"} price={9000} image={"https://images.unsplash.com/photo-1652067871157-9d59bf7002ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}></Availablehouses> 
      <Availablehouses landlord={"Mr Landlord"} price={3000} image={"https://images.unsplash.com/photo-1601564892953-c7f49d311c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}></Availablehouses>
      <Availablehouses landlord={"Mrs Deed"} price={2000} image={"https://images.unsplash.com/photo-1569152811536-fb47aced8409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}></Availablehouses>
     </div>
     
    </>
  );
}

export default App;

// export function FirstComment(){
//   return (
   
//   )
// }

