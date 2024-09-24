import React from 'react'
import './Profile.css'
import { Divider } from "antd";

function Profile() {
    return (
        <div >
<div className='xyz' >
            <div className='profile-container' >
                <h1 className='profile-h1'>Create Your Profile Form</h1>
                <Divider  style={{ borderColor: 'black' }} />
                {/* < Divider  ='horizontal' />hori */}
                <div className='profile-container-form'>

                    <div className='left'>
                        <h6 className='profile-h6'>Your Name</h6>
                        <input type="text" className='mb-3' placeholder='First ' />
                    </div>

                    <div className='right'>
                        <input type="text" className='mb-3' placeholder='Last ' />
                    </div>

                </div>
            </div>

            <div className='profile-container'>
                <div className='profile-container-form'>
                    <div className='center'>
                        <h6 className='profile-h6'>Email address</h6>
                        <input type="text" className='form-control mb-3' />
                    </div>

                </div>
            </div>

            <div className='profile-container'>
                <div className='profile-container-form'>
                    <div className='center'>
                        <h6 className='profile-h6' >Age</h6>
                        <input type="text" className='form-control mb-3' />
                    </div>

                </div>
            </div>

            <div className='profile-container'>
                <div className='profile-container-form'>
                    <div className='left'>
                        <h6 className='profile-h6'>Your city/country</h6>
                        <input type="text" className='mb-3' placeholder='City ' />
                    </div>

                    <div className='right'>
                        
                        <select name="" id="a" style={{ width: "185px" }}>
                            {/* <input type="text" /> */}
                            <option value="select">--Country--</option>
                            <option value="IN">INDIA</option>
                            <option value="USA">USA</option>
                            <option value="CAN">CANADA</option>
                            <option value="PAK">PAKISTAN</option>
                            <option value="SRI">SRILANKA</option>
                            <option value="UAE">UAE</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className='profile-container'>
                <div className='profile-container-form'>
                    <div className='center'>
                        <h6 className='profile-h6'>Short bio or description of your interests</h6>
                        <input type="text" className='form-control mb-3' />
                    </div>

                </div>
            </div>

            <div className='profile-container'>
                <div className='profile-container-form'>
                    <div className='profile-button'>
                    <button className="btn btn-warning ">SUBMIT FORM</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}
export default Profile