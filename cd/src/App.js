
import {React,useState} from "react";
function App() {
  const[form,setForm]=useState({
    username:"",
    password:""
  })
  const[message,setMessage]=useState("")
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm((prev)=>({
    ...prev,
    [name]:value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    {form.username=="user" && form.password=="password"?(
      setMessage("Welcome, user!")
    ):(
      setMessage("Invalid username or password:")
    )}
  }
  return (
    <>
    <h1>Login Page</h1>
   <form style={{margin:"10px 10px 10px 10px"}}>
    <label htmlFor="username">Username:</label>
    <input type="text" name="username" required value={form.username} onChange={handleChange}/><br/>
    <label htmlFor="password">Password:</label>
    <input type="password" name="password" required value={form.password} onChange={handleChange}/><br/>
   </form>
   <button onClick={handleSubmit}>Submit</button>
   {message&&<h2>{message}</h2>}
   </>
  );
}

export default App;
