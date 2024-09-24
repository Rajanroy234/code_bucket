import React from 'react'
import './Profiles.css'
import { Divider } from "antd";

function Profiles() {
    return (
        <div>
<div className='profiles'>
            <div className='profiles-containers'>
                <h1 className='profiles-h1'>Create Your Profiles Form</h1>
                <Divider style={{ borderColor: 'green' }} />
                <div className='profiles-container-form'>

                    <div className='left'>
                        <h6 className='profiles-h6'>Your Name</h6>
                        <input type="text" className='mb-3' placeholder='First ' />
                    </div>

                    <div className='rights'>
                        <input type="text" className='mb-3' placeholder='Last ' />
                    </div>

                </div>
            </div>

            <div className='profiles-container'>
                <div className='profiles-container-form'>
                    <div className='centers'>
                        <h6 className='profiles-h6'>Email address</h6>
                        <input type="text" className='form-control mb-3' />
                    </div>

                </div>
            </div>

            <div className='profiles-container'>
                <div className='profiles-container-form'>
                    <div className='center'>
                        <h6 className='profiles-h6' >Age</h6>
                        <input type="text" className='form-control mb-3' />
                    </div>

                </div>
            </div>

            <div className='profiles-container'>
                <div className='profiles-container-form'>
                    <div className='left'>
                        <h6 className='profiles-h6'>Your city/country</h6>
                        <input type="text" className='mb-3' placeholder='City ' />
                    </div>

                    <div className='right'>
                        {/* <input type="text" className='mb-3' placeholder='Last ' /> */}
                        <select name="" id="a" style={{ width: "185px" }}>
                            <input type="text" />
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

            <div className='profiles-container'>
                <div className='profiles-container-form'>
                    <div className='center'>
                        <h6 className='profiles-h6'>Short bio or description of your interests</h6>
                        <input type="text" className='form-control mb-3' />
                    </div>

                </div>
            </div>

            <div className='profiles-container'>
                <div className='profiles-container-form'>
                    <div className='profiles-button'>
                    <button className="btn btn-success">SUBMIT FORM</button>
                    </div>
                </div>
            </div>

        </div>
         </div>
    )
}
export default Profiles