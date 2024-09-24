import React from 'react';
import { Nav, Navbar, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Divider } from 'antd';


function NavBar() {

  return (
    <div>
      <>
        {/* <-------------- CUSTOMER PANNEL -----------------> */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="/">Code-Bucket</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/productlist">Product</Link>
            {/* <Link to="/addtocart"></Link> */}
            <Link to="/order">Order</Link>
            <div style={{ paddingLeft: "550px", marginTop: "7px" }}>
              <Link to="/profile">Profile</Link>
            </div>

            {/* <-------------- SELLER PANNEL -----------------> */}
            <Dropdown style={{ paddingLeft: "38px", marginbottom: "5px" }}>
              <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: "wheat" }}>Seller</Dropdown.Toggle>
              <Dropdown.Menu>
                <h6><Link to="/logins">Logins</Link></h6>
                <h6><Link to="/registers">Registers</Link></h6>
                <h6><Link to="/add">Add Product</Link></h6>
                <h6><Link to="/edit">Edit Product</Link></h6>
                <h6><Link to="/view">View Product</Link></h6>
                <h6><Link to="/orders">Orders</Link></h6>
                <Divider style={{ borderColor: 'wheat' }} />
                <h6><Link to="/profiles">Profiles</Link></h6>
              </Dropdown.Menu>
            </Dropdown>

            {/* <-------------- ADMIN PANNEL -----------------> */}
            <Dropdown style={{ paddingLeft: "35px", marginbottom: "5px" }}>
              <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: "wheat" }}>Admin</Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "185px" }}>
                <h6><Link to="/LogInss">LogIn</Link></h6>
                <h6><Link to="/viewallproduct">View All Products</Link></h6>
                {/* <h6><Link to="/login">View All Sellers</Link></h6> */}
                <h6><Link to="/customer">View All Customers</Link></h6>
                <h6><Link to="/oder">View All Orders</Link></h6>
              </Dropdown.Menu>
            </Dropdown>


            {/* <div className='menu'>
              <NavDropdown className='submenu' title="Seller" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="/seller">Seller Pannel</NavDropdown.Item> */}

            {/* <h6><Link to="/add">Add Product</Link></h6>
                <h6><Link to="/edit">Edit Product</Link></h6>
                <h6><Link to="/view">View Product</Link></h6>
                <h6><Link to="/order">Order</Link></h6> */}
            {/* <NavDropdown.Divider /> */}
            {/* <h6><Link to="/profiles">Profile</Link></h6> */}

            {/* </NavDropdown>
            </div> */}

          </Nav>
        </Navbar>
      </>
    </div>
  )
}

export default NavBar
