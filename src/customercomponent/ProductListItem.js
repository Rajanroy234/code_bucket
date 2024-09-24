import React from 'react'
// import AddToCart from './SearchProduct'
import { Link } from 'react-router-dom'

function ProductListItem() {
    return (
        <div>

            {/* <h1>Product Card List</h1> */}
            <div>
                <div className="card" style={{ width: "15rem" }} >
                    <img src="https://www.botnia.in/cdn/shop/files/cottonterryandwomenshirts_1_0bd8b09f-48cc-4f92-a3a1-a1b485c69129.png?v=1716376995&width=3000"
                        className="card-img-top" alt="..." style={{ height: "200px" }} />
                    <div classNameName="card-body">
                        <h5 className="card-title">Echo Haven</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <h5 style={{ color: "gray", marginLeft: '6px' }}>Price : $10</h5>
                        
                        {/* <a href="/carditem" className="btn btn-sm btn-primary" >Buy Now</a> */}
                        <button className="btn btn-sm btn-primary" style={{marginLeft:"5px",marginBottom:"5px"}}>
                            <Link to="/buynow" style={{textDecoration:"none",color:"white",}} >Buy Now
                            </Link></button>
                        
                        <button className="btn btn-sm btn-primary" style={{marginLeft: '65px',marginBottom:"5px"}}>
                            <Link to="/addtocart" style={{textDecoration:"none",color:"white",}} >Add to Cart
                            </Link></button>

                        {/* <div style={{marginLeft:"130px" ,marginBottom:"30px"}}>
                            <button className="btn btn-sm btn-success" style={{ color: 'red' }}><Link to="/addtocart">Add To Cart</Link></button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListItem
