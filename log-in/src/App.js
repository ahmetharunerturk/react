import {useState } from 'react';

function App() {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[loggedIn,setLoggedIn] = useState(false)
    const[error,setError] = useState("");

  //const[state,dispatch] = useReducer(logInReducer,{
    //username:"",
   // password:"",
    //loggedIn:false,
   // error:""
    //});

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    try{
      if(username==="admin" && password==="admin"){
        setLoggedIn(true)
      }else{
        throw Error;
      }
      setUsername("");
      setPassword("");

    } catch(error){
      setError("Incorrect")
      setUsername("");
      setPassword("");
    }
  }

  return (
    <>     
    
      <div className=''>
        {loggedIn ? (
          <>
            <div className='flex flex-col items-center gap-4'>
              <h2 className='text-center text-3xl mt-4 py-4'>Welcome {username}! </h2>
              <button className='bg-blue-600 text-white text-lg font-medium rounded-xl py-1 px-3' onClick={()=>setLoggedIn()}>Log out</button>
            </div>
          </>
        ):(
          <>
          <h1 className='text-3xl text-center'>Login/Sign-up</h1>

          <form action="" className='flex flex-col items-center justify-center gap-4 mt-4 py-2' onSubmit={handleSubmit}>
          <input type="text" autoComplete='username' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} className='border rounded-lg px-2 py-1'/>

          <input type="text" autoComplete='current-password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border rounded-lg px-2 py-1'/>

          <button className='bg-blue-600 text-white text-lg font-medium rounded-xl py-1 px-3' type='submit'>Log in</button>

          <p className='text-red-500 text-center'>{error}</p>

        </form>
          
          </>
        )}
        
        

      </div>
    
    </>
  );
}

export default App;
