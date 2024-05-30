import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'

export default function Login() {
    const [credentials, setcredentials] = useState({
        email: "",
        password: ""
    })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/loginUser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const Result = await response.json()
        console.log(Result)

        if (!Result.success) {
            alert("Enter valid credentials")
        }
        if (Result.success) {
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/")
        }


    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    };
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onChange={onChange}>Submit</button>
                <Link to="/createUser" className=" m-3 btn btn-danger">don't have an account SignUP</Link>
            </form>
        </div>
    )
}
