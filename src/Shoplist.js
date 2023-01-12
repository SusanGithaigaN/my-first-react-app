import React from "react";

// function Shoplist ({shopname,location, tillNumber}){
//     return(
//         <>
//             <h1>Shop's name: {shopname}</h1>
//             <h3>Shop location: {location}</h3>
//             <button>Till number: {tillNumber}</button>
//         </>
//     )
// }

// Destructuring
function Shoplist ({shop:{shopName, location, tillNumber}}){
    // function tillClicked(){
    //     alert(`Lipa na M-pesa to ${tillNumber}`)
    // }
    return(
        <>
            <h1>Shop's name: {shopName} </h1>
            <h3>Shop location: {location}</h3>

            {/* {tillNumber !==undefined ? <button>Till number: {tillNumber}</button> :  } */}

            {/* ternary expression */}
            {/* {condition ? (what happens) "if true" :"if not true"} */}


            {/* {tillNumber ? <button>Till number: {tillNumber}</button> : 900800} */}
            <button onClick={() => alert(`Lipa na M-pesa to ${tillNumber}`)}>Till number: {tillNumber}</button>
        </>
    )
}
export default Shoplist