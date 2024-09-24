import React from 'react'
import './LogIn.css'

function LogIn() {
  return (
    <div className='LogIn'>
      {/* <h1>WELCOME</h1> */}
      <h6 style={{textAlign:"center"}}>PLEASE LOGIN TO ADMIN DASHBOARD</h6>
      <div>
        <div className="col-sm-5 offset-sm-3">
          <h1>Log In</h1>
          <input type="text" placeholder="Email" className="form-control" /> <br />
          <input type="text" placeholder="Password" className="form-control" /> <br />
          <button className="btn btn-primary form-control button">Login</button> <br />  <br />
        </div>
      </div>
    </div>
  )
}

export default LogIn
