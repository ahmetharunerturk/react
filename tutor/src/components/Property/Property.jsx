import React, { useEffect, useRef, useState } from "react";

function Property() {

    const clickFunction = () =>{
        setCount(count + 1);
        
    }

    const arr = [
        {name:"Ahmet", age: 21},
        {name:"Mehmet", age: 25},
        {name:"Mustafa", age: 19},
    ]

    const[count,setCount] = useState(0)
    const[status, setStatus] = useState("deneme")

    useEffect(()=>{
        setStatus("new status")
    },[status])


    const firstRef = useRef();
    console.log("firstRef", firstRef.current);

    return(
        <>

            <h1>Status: {status}</h1>
            <input ref={firstRef} type="text" placeholder="search"/>            
            
            <br />

            
            <h1>Count: {count}</h1>
            <button onClick={clickFunction}>Button</button>
            {
                arr.map((ar,i) => (
                    <div key={i}>{ar.name}</div>


                ))
            }

            
        
        
        </>
    )
}

export default Property;