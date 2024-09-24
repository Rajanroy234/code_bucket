import React from 'react'
import './AddProduct.css'
import { Divider } from "antd";
import Form from 'react-bootstrap/Form';


function AddProduct() {
  return (
    <div>
      <div className='asd'>
      <div className='add-container'>
        <div className='add-to-product'>
          <h1 className='add-h1'>Add-To-Product</h1>
          <Divider style={{ borderColor: 'black' }} />
          <div className='form-product-list'>
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
          <Form.Label>Comments</Form.Label> <br />
          <Form.Control as="textarea" rows={4} style={{width:"500px"}}/> <br />
          </Form>
          </div>
          <Divider style={{ borderColor: 'black' }} />

          <button className="btn btn-primary asd">Submit</button> <br />  <br />
        </div>
      </div>

    </div>
    </div>
  )
}

export default AddProduct
