// start the function name in caps
// declare a function
// return jsx
// export the component


//  when you pass data from the parent to child, the
//  data is received by the child using the props argument
function Availablehouses(props) {
    console.log(props)
    return (
        <>
        <h1>List of available houses</h1>
        <img src={props.image}></img>
        <button>{props.price}</button>
        <h3>{props.landlord}</h3>
        

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