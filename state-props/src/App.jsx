import { useState } from 'react'
import './App.css'
import { Change } from './Change'

function App() {

  const[username,setUserName] = useState("")

  const handleInput = (e) =>{
    setUserName(e.target.value)
  }


  return (
    <>
      <h1>State and Props</h1>
      <label htmlFor="username">Enter your username: </label>
      <input 
        type="text" 
        id="username"
        placeholder='type your username'       
        onChange={handleInput}
        
        />

        <p>Hi there, {username}</p>
        <p>{username}, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur perferendis praesentium vitae molestiae.</p>

      <Change setUsername={setUserName} />

    </>
  )
}

export default App
