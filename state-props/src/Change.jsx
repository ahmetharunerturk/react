import React from 'react'

export const Change = ({setUsername}) => {


    const handlePropChange = () =>{
        setUsername("Name")
        
    }



    
  return (
    <button onClick={handlePropChange}>Hide my name</button>
  )
}
