import './Register.css'
import { Link } from 'react-router-dom'


function Register() {
    return (
        <div>
            <div className='first-section-register'>
                <div className="right-section-register">
                    {/* <div> */}
                    <img src="https://www.pngitem.com/pimgs/m/112-1127587_software-hire-developers-hd-png-download.png" style={{ height: "400px" }} alt="" />
                    {/* </div> */}
                </div>


                <div className="left-section-register">
                    <h1>Registration</h1>
                    <span>Enter your detail to register</span> <br /> <br />
                    <input type="text" placeholder="First Name" className="form-control" /> <br />
                    <input type="text" placeholder="Last Name" className="form-control" /> <br />
                    <input type="text" placeholder="Email" className="form-control" /> <br />
                    <input type="text" placeholder="Password" className="form-control" /> <br />
                    <input type="text" placeholder="Mobile Number" className="form-control" /> <br />
                    <button className="btn btn-primary">Register</button>  

                        New Users? <Link to='/login'>Login here.</Link>
                    
                </div>
            </div>
        </div>
    )
}
export default Register