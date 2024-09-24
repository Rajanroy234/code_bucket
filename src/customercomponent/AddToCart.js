import { Divider } from 'antd';
import React from 'react'
import './AddToCard.css'
import Table from 'react-bootstrap/Table';
// import Link from 'antd/es/typography/Link';
import { Link } from 'react-router-dom'

function AddToCart() {
  const addtocards = [
    { img: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077", producttitle: "Echo Haven", color: "red", quantity: "1", price: "$50.00" },
    { img: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077", producttitle: "Echo Haven", color: "blue", quantity: "2", price: "$50.00" },
    { img: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077", producttitle: "Echo Haven", color: "green", quantity: "1", price: "$50.00" }
  ]
  return (
    <div>
      <div className='addtocard'>
        <h2 className='h1-shoppingcart'>Your Cart</h2>
        <Divider style={{ borderColor: "black" }} />

        <Table striped >
          <tbody >
            <tr >
              <td>Product Image</td>
              <td>Product Title</td>
              <td>Color</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>

            {
              addtocards.map((items) =>
                <tr>
                  <td>{items.im}</td>
                  <td>{items.producttitle}</td>
                  <td>{items.color}</td>
                  <td>{items.quantity}</td>
                  <td>{items.price}</td>
                </tr>)
            }
          </tbody>
        </Table>
        <Divider style={{ borderColor: "black" }} />

        <h6 style={{marginLeft:"20px"}}><Link to="/shippingaddress">Add a new address</Link></h6>
        {/* <h5 style={{marginLeft:"800px"}}>Sub-Total</h5> */}
        <button className='btn btn-info' style={{marginLeft:"800px",width:"200px",borderRadius:"20px",marginBottom:"50px"}}>Checkout</button>
      </div>
      
    </div>

  )
}

export default AddToCart


// "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077"