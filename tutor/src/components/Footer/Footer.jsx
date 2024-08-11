import React, { useEffect, useRef, useState, useMemo } from "react";

function Footer() {

    const[count,setCount] = useState(0)
    const[text,setText] = useState("")

    const func = (num) =>{
        console.log("hesaplanıyor");
        
        for (let index = 0; index < 10000000; index++) {
            num++
            
        }
        return num
    }
    
    const memo = useMemo(()=> func(count),[count])
    

    return(
        <>

            {memo}  

            <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="search"/>            
            
            <br />        

            
        
        
        </>
    )
}

export default Footer;