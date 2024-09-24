import React from 'react'
import './ShippingAddress'

function ShippingAddress() {
  return (
    <div>
      <div className="shipping-address" style={{ backgroundColor: "whitesmoke", width: "75%", margin: "auto", display: "block",marginTop:"15px" }}>
        <div className="col-sm-7 offset-sm-2">
          <h1>Shipping Address</h1>
          <span>Enter your detail to Shipping Address</span> <br /> <br />
          <h6>Name*</h6>
          <input type="text" className="form-control" /> <br />
          <h6>City*</h6>
          <input type="text" className="form-control" /> <br />

          <h6>State*</h6>
          <select name="" id="" style={{ width: "100%", height: "38px" }}>
            <option value="select">-- Select State --</option>
            <option value="bihar">BIHAR</option>
            <option value="punjab">PUNJAB</option>
            <option value="keral">KERAL</option>
            <option value="westbangal">WEST BANGAL</option>
            <option value="tamil">TAMILNADU</option>
            <option value="up">UP</option>
          </select>
          <h6>Pin Code</h6>
          <input type="text" className="form-control" /> <br />

          <h6>Country*</h6>
          <select name="" id="" style={{ width: "100%", height: "38px" }}>
            <option value="select">-- Country --</option>
            <option value="IN">INDIA</option>
            <option value="USA">USA</option>
            <option value="CAN">CANADA</option>
            <option value="PAK">PAKISTAN</option>
            <option value="SRI">SRILANKA</option>
            <option value="UAE">UAE</option>
          </select> 
          <h6>Phone</h6>
          <input type="text" className='form-control' /> <br />
          <button className="btn btn-success" style={{width:"80px",borderRadius:"10px",marginBottom:"20px"}}>Save</button>
          <button className="btn btn-dark" style={{marginLeft:"50px",borderRadius:"10px",marginBottom:"20px"}}>Cancel</button> 
        </div>
      </div>
    </div>
  )
}

export default ShippingAddress
