import React, { useState } from 'react'
import './Registers.css'
import { Link } from 'react-router-dom'

function Registers() {

  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  function register(){
    let item = {first,last,email,password,number}
    // console.warn(first,last,email,password,number)
    console.warn(item)
  }



  return (
    <div className='registers'>
      <div className="col-sm-7 offset-sm-2">
        <h1>Registration</h1>
        <span>Enter your detail to register</span> <br /> <br />
        <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control" /> <br />
        <input type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control" /> <br />
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" /> <br />
        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" /> <br />
        <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" className="form-control" /> <br />
        <button className="btn btn-primary" onClick={register}>Register</button> <br /> <br />

        <div>
          New Users? <Link to='/logins'>Login here.</Link>
        </div>
      </div>
    </div>
  )
}

export default Registers
