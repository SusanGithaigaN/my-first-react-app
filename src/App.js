// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Availablehouses from './Availablehouses';
import {studentnames, Availablehouses}  from './Availablehouses'


function App() {
  // console.log(studentnames)

  let avHouses = [
    { landlord:"Makumi", price:9000, bedrooms:10, image:"https://images.unsplash.com/photo-1652067871157-9d59bf7002ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    { landlord:"Maploti", price:2000, bedrooms:10, image:"https://images.unsplash.com/photo-1601564892953-c7f49d311c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    { landlord:"Zakayo", price:8000, bedrooms:10, image:"https://images.unsplash.com/photo-1569152811536-fb47aced8409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    { landlord:"Ayubu", price:12000, bedrooms:10,  image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    { landlord:"Yusufu", price:6500, bedrooms:10, image:"https://plus.unsplash.com/premium_photo-1669223464679-5d5f6e1a83e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
  ]

  let myList = avHouses.map( (house, ind) => {
    return(
      <Availablehouses myHouse={house}></Availablehouses>
    )
  })

  return (
    <>
      {/* <p>Hey there, welcome</p> */}
      <h1>Niaje bro, karibu</h1>
      <img height={'70%'} width={'70%'} src='https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='myImage'></img>
      {/* <div> */}
      
      {/* //change landlord, change price */}
      {/* <Availablehouses landlord={"Mr Maploti"} price={9000} image={"https://images.unsplash.com/photo-1652067871157-9d59bf7002ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}></Availablehouses> 
      <Availablehouses landlord={"Mr Landlord"} price={3000} image={"https://images.unsplash.com/photo-1601564892953-c7f49d311c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}></Availablehouses>
      <Availablehouses landlord={"Mrs Deed"} price={2000} image={"https://images.unsplash.com/photo-1569152811536-fb47aced8409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}></Availablehouses> */}
     {/* </div> */}

     {/* Render myList  */}
     {myList}
     
    </>
  );
}

export default App;

// // ES6 Destructuring
// let myObj= {fName:"Susan", lName:"Githaiga", nationality:"Kenyan"}
// let{fName,lName, nationality}= myObj;
// console.log(lName)

// export function FirstComment(){
//   return (
   
//   )
// }

