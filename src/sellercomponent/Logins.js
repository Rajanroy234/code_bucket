import React from 'react'
import './Logins.css'

function Logins() {
    return (
        <div className='logins'>
            <div className="col-sm-5 offset-sm-3">
                <h1>Log In</h1>
                <input type="text" placeholder="Email" className="form-control" /> <br />
                <input type="text" placeholder="Password" className="form-control" /> <br />
                <button className="btn btn-primary form-control button">Login</button> <br />  <br />
            </div>
        </div>
    )
}

export default Logins
