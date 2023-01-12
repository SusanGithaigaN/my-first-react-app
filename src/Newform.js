import React from "react";
import { useState } from "react";
// how to send data from child to parent
    // create a function in the parent component
    // pass that function to the child as a prop => parentFunction ={childData}
    // in the child, invoke the prop like a normal function => parentFunction

// destructure a prop
function Newform({parentFunction, onAddHouse}){
    const [landlordName, setLandlordName] = useState("")
    const [housePrice, setHousePrice] = useState("")
    const[houseImage, setHouseImage] =useState("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg")
    // save the final data as an object because we want to construct an object
    const[finalData, setFinalData] = useState({})
    // console.log(props);
    function handleClick(){
        parentFunction("susan")
    }
    function handleLandlord(e){
        setLandlordName(() => e.target.value)
    }
    function handlePrice(e){
        setHouseImage(()=> e.target.value)
    }
    function handleImage(e){
        setHouseImage(()=> e.target.value)
    }
    function handleSubmit(e){
        // prevent the event from 
        e.prevetDefault()
        let myData= {landlord: landlordName, image:houseImage, price: housePrice}
        setFinalData(() => myData)
        onAddHouse(myData)
        console.log(myData)
    }
    // console.log(finalData);
    return(
        <>
        <button onClick={handleClick} value={landlordName}>Call parent</button>
        <form onSubmit={handleSubmit} style={{margin:30}}>
        <label>
            Landlord name:
            <input onChange={handleLandlord} type="text" name="landlord"/>
        </label>
        <label>
        House rent:
            <input onChange={handlePrice} type="text" name="price"/>
        </label>
        <label>
            Image of your house:
            <input onChange={handleImage} type="text" name="image"/>
        </label>
    <input type="submit" value="Submit" />
</form>
</>
    )
}
export default Newform