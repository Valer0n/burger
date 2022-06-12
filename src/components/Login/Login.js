import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [problem, setProblem] = useState(false);
    const navigate = useNavigate();



    const logIn = (e) => {
        e.preventDefault();
        const localName = localStorage.getItem('name');
        const localPassword = localStorage.getItem('password');

        if (localName === name && localPassword === password) {
            navigate('/burger');

        } else {
            setProblem(true);
        }

    }

    const changeInputName = (e) => {
        setName(e.target.value);
        setProblem(false);
    }
    const changeInputPassword = (e) => {
        setPassword(e.target.value);
        setProblem(false);
    }
    return (
        <>
            <form >
                <label htmlFor="name" style={{ color: 'white' }}>Name</label>
                <input type='text' name='name' onChange={changeInputName} /><br />
                <label htmlFor="password" style={{ color: 'white' }}>Password</label>
                <input type='password' name='password' onChange={changeInputPassword} /> <br />
                <button type="submit" onClick={logIn}>Log in</button>
            </form>
            {problem ? <div>Problem</div> : <div></div>}
        </>
    )
}
export default Login;