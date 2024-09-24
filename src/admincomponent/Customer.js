import React from 'react'
import './Customer.css'
import Table from 'react-bootstrap/Table';

function Customer() {
    const customers = [
        { sno: "1", customername: "a", productname: "T-shirt", address: "Patna", price: 111 },
        { sno: "2", customername: "b", productname: "T-shirt", address: "Keral", price: 222 },
        { sno: "3", customername: "c", productname: "T-shirt", address: "Punjab", price: 333 },
        { sno: "4", customername: "d", productname: "T-shirt", address: "Delhi", price: 444 },
        { sno: "5", customername: "e", productname: "T-shirt", address: "Digha", price: 555 },
        { sno: "6", customername: "f", productname: "T-shirt", address: "Kanpur", price: 666 },
        { sno: "7", customername: "g", productname: "T-shirt", address: "Harnaut", price: 777 },
        { sno: "8", customername: "h", productname: "T-shirt", address: "Bihar", price: 888 },
        { sno: "9", customername: "i", productname: "T-shirt", address: "Mokama", price: 999 },
        { sno: "10", customername: "j", productname: "T-shirt", address: "Munger", price: 101 },

    ]

    return (
        <div>
            <div className='customer-container'>
                <h1 className='customer-h1'>View All Customer</h1>
                <Table striped bordered >
                    <tbody >
                        <tr>
                            <td>S.NO</td>
                            <td>Customer-Name</td>
                            <td>Product-Name</td>
                            <td>Address</td>
                            <td>Price</td>
                        </tr>

                        {
                            customers.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.sno}</td>
                                    <td>{item.customername}</td>
                                    <td>{item.productname}</td>
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

export default Customer
