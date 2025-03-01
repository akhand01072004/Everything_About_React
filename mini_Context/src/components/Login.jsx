import React from 'react'
import UserContext from '../context/UserContext'
import { useState , useContext} from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleClicked = (e)=>{
        e.preventDefault();
        setUser({username, password})

    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='username' />
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         type="password"
         placeholder='passsword' />
        <button onClick={handleClicked}>Submit</button>
    </div>
  )
}

export default Login