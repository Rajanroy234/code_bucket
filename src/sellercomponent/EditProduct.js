import React from 'react'
import './EditProduct.css'
import { Divider } from "antd";
import Form from 'react-bootstrap/Form';

function Edit() {
  return (
    <div>
      <div className='edit-container'>
        <div className='edit-to-product'>
          <h1 className='edit-h1'>Edit a Product</h1>
          <Divider style={{ borderColor: 'black' }} />
          <div className='edit-product-list'>
          <Form>
          <Form.Label >Product Name</Form.Label> <br/>
          <input type="text" className='mb-2' /> <br />
          <Form.Label >Image of Product</Form.Label> <br />
          <img src="" alt="" height={150} width={500} className='mb-2'/> <br />

          <Form.Label >Product Color</Form.Label> <br />
          <select name="" id="" className='mb-2' style={{width:"180px"}}>
          <option value="select"> --Choose Color-- </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select> <br />



          <Form.Label >Additional Description</Form.Label> <br />
          <Form.Control as="textarea" rows={3} style={{width:"500px"}}/> <br />
          <Form.Label >Price</Form.Label> <br />
          <input type="text" className='mb-2'placeholder='ex: $5' /> <br />
          </Form>
          </div>
          <Divider style={{ borderColor: 'black' }} />

          <button className="btn btn-primary asd">Save</button> <br />  <br />
        </div>
      </div>
    </div>
  )
}

export default Edit
