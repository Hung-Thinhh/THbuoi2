import { useState } from "react";
function Login() {
    const [login, setLogin] = useState({ username: '', password: '', isAdmin: false })
    return ( 
        <>
            <br />
        Enter your username:<input type="text" value={login.username} onChange={(e) => setLogin({...login,username:e.target.value})}/><br />
            Enter your password:<input type="text" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} /><br />
            <input type="checkbox" value={login.isAdmin} onChange={(e) => setLogin({ ...login, isAdmin:e.target.checked })} />Is Admin? <br />
            <button onClick={() => {
                console.log(JSON.stringify(login))
            }}>Đăng nhập</button>
        </>
     );
}

export default Login;