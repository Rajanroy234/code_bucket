import React from 'react'

function ViewsAllsProducts() {
    return (
        <div>
            <div>
                <div className="card" style={{ width: "15rem" }} >
                    <img src="https://www.botnia.in/cdn/shop/files/cottonterryandwomenshirts_1_0bd8b09f-48cc-4f92-a3a1-a1b485c69129.png?v=1716376995&width=3000"
                        className="card-img-top" alt="..." style={{ height: "200px" }} />
                    <div classNameName="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <a href="/carditem" className="btn btn-sm btn-primary"style={{marginLeft:'5px', marginBottom:"10px"}}>Buy now</a>
                        <a href="/carditem" className="btn btn-sm btn-primary" style={{marginLeft:'70px', marginBottom:"10px" }}>Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewsAllsProducts