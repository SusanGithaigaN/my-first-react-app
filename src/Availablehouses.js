// start the function name in caps
// declare a function
// return jsx
// export the component


//  when you pass data from the parent to child, the
//  data is received by the child using the props argument

// using destructuring in props with default values
function Availablehouses({image="https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2VzJTIwZm9yJTIwcmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",landlord, price="the house is free"}) {
    // console.log(image)
    // console.log(landlord)
    // console.log(price)
    return (
        <>
        <h1>List of available houses</h1>
        {/* not ternary expression  for landlord*/}
        {/* {props.landlord ==="Mr Makumi" ?  <img src={props.image} ></img> :<p>Not Makumi</p>} */}
        {/* '' for image with a condition and a default value  */}
        {/* <img src={props.image !== "" ? props.image : "https://media.istockphoto.com/id/1356363489/photo/poor-tired-depressed-hungry-homeless-man-holding-a-cardboard-house-nostalgia-and-hope-concept.jpg?b=1&s=170667a&w=0&k=20&c=ZKFuAonoSB36M4vH4kvuXtFtc5v6bGEpMW1VpMQPT4M="} */}
        <img src={image} ></img> 
        <button>{price}</button>
        <h3>{landlord}</h3>
        

        </>
    )
}

let studentnames =['zakaria', 'Bathlomeo', 'Ayubu', 'Yakubu','Zebedayo','Susan', 'Githaiga']
let bankAccs =[2842000,768000, 242000,750000]

export  {studentnames,bankAccs, Availablehouses}


// export default Availablehouses


// // Assign a prop to a component
// function ParentComponent() {
//     // passing prop to ChildComponent
//     return <ChildComponent text="Hello!" number={2} />;
//   }
  
//   function ChildComponent(props) {
//     // using the values of the text and number props
//     return (
//       <div>
//         {props.text} {props.number}
//       </div>
//     );
//   }