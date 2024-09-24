import React from 'react'
import './ViewProduct.css'
import Table from 'react-bootstrap/Table';


function ViewProduct() {
  const views = [
    { sno: "1", productname: "asd", productimage: "", productcolor: "red", price: 111 },
    { sno: "2", productname: "asd", productimage: "", productcolor: "red", price: 111 },
    { sno: "3", productname: "asd", productimage: "", productcolor: "red", price: 111 },
    { sno: "4", productname: "asd", productimage: "", productcolor: "red", price: 111 },
    { sno: "5", productname: "asd", productimage: "", productcolor: "red", price: 111 },
    { sno: "6", productname: "asd", productimage: "", productcolor: "red", price: 111 }
  ]
  return (
    <div >
      <div className='view-container'>
        <h1 className='view-h1'>View With Product List</h1>
        <Table striped bordered >
          <tbody >
            <tr>
              <td>S.NO</td>
              <td>Product-Name</td>
              <td>Product-Image</td>
              <td>Product-color</td>
              <td>Price</td>
            </tr>

            {
              views.map((item, i) =>
                <tr key={i}>
                  <td>{item.sno}</td>
                  <td>{item.productname}</td>
                  <td>{item.productimage}</td>
                  <td>{item.productcolor}</td>
                  <td>{item.price}</td>
                </tr>)
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ViewProduct

