// import './App.css';
import React, {useState} from 'react'

function App() {
 const [userName, setUsername]=useState("")
 const [password, setPassword]=useState("")
 const[loginMessage, setLoginMessage]=useState("")
 const [loginSuccess, setLoginSuccess]=useState("")


 function loginCheck(userName,password){
  if(userName==="user" && password==="password"){
    return "Welcome User"
  }
  else{
    return "Invalid username or password"
  }
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  const message= loginCheck(userName,password)
  setLoginMessage(message)
  if(userName==="user" && password==="password"){
    setLoginSuccess(true)
  }
 }

//  console.log("userName=",userName)
//  console.log("Password=",password)

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      {loginMessage && <h2>{loginMessage}</h2>}
      {!loginSuccess && (<form onSubmit={handleSubmit}>
      <div>
      Username <input placeholder='Enter User Name' value={userName} onChange={(e)=>setUsername(e.target.value)} required/>
      Password <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}required/>
      </div>
      <button type='Submit'>Submit</button>
      </form>)}
      
    </div>
    
  );

  
}

export default App;
