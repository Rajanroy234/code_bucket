import React from 'react'
import './Oder.css'
import Table from 'react-bootstrap/Table';

function Oder() {
  const oder = [
    { sno: "1", customername: "a", productname: "T-shirt", color: "red", address: "Patna", price: 111 },
    { sno: "2", customername: "b", productname: "T-shirt", color: "blue", address: "Keral", price: 222 },
    { sno: "3", customername: "c", productname: "T-shirt", color: "red", address: "Punjab", price: 333 },
    { sno: "4", customername: "d", productname: "T-shirt", color: "red", address: "Delhi", price: 444 },
    { sno: "5", customername: "e", productname: "T-shirt", color: "green", address: "Digha", price: 555 },
    { sno: "6", customername: "f", productname: "T-shirt", color: "yellow", address: "Kanpur", price: 666 },
    { sno: "7", customername: "g", productname: "T-shirt", color: "red", address: "Harnaut", price: 777 },
    { sno: "8", customername: "h", productname: "T-shirt", color: "red", address: "Bihar", price: 888 },
    { sno: "9", customername: "i", productname: "T-shirt", color: "Orange", address: "Mokama", price: 999 },
    { sno: "10", customername: "j", productname: "T-shirt", color: "red", address: "Munger", price: 101 },

  ]


  return (
    <div>
      <div className='oder-container'>
        <h1 className='oder-h1'>View All Order Product List</h1>
        <Table striped bordered >
          <tbody >
            <tr>
              <td>S.NO</td>
              <td>Customer-Name</td>
              <td>Product-Name</td>
              <td>color</td>
              <td>Address</td>
              <td>Price</td>
            </tr>

            {
              oder.map((item, i) =>
                <tr key={i}>
                  <td>{item.sno}</td>
                  <td>{item.customername}</td>
                  <td>{item.productname}</td>
                  <td>{item.color}</td>
                  <td>{item.address}</td>
                  <td>{item.price}</td>
                </tr>)
            }
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default Oder
