import { Link } from 'react-router-dom'
import './Login.css'


function Login() {
  return (
    <div >
      <div className='first-section '>
        <div className="left-container">
          <div>Don't Force </div>
          <div>user to.</div>
          <div>Register Before</div>
          <div>They Can Buy</div>
        </div>

        <div className='right-container'>
          <h1>Log In</h1>
          <input type="text" placeholder="Email" className="form-control" /> <br />
          <input type="text" placeholder="Password" className="form-control" /> <br />
          <button className="btn btn-primary form-control button">Login</button> <br />  <br />

          <div>
            New Users? <Link to='/register'>Register here.</Link>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Login
