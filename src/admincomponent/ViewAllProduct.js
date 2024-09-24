import React from 'react'
import './ViewAllProduct.css'
import ViewsAllsProducts from './ViewsAllsProducts'


function ViewAllProduct() {
    return (
        <div>
            <div className='viewallproduct'>
                <div className='container my-3'>
                    <h1>View All Products Card List Item</h1>
                    <div className='row my-3'>
                        <div className='col-md-4'>
                            <ViewsAllsProducts></ViewsAllsProducts>
                        </div>
                        <div className='col-md-4'>
                            <ViewsAllsProducts></ViewsAllsProducts>
                        </div>
                        <div className='col-md-4'>
                            <ViewsAllsProducts></ViewsAllsProducts>
                        </div>
                    </div>


                    <div className='row my-3'>
                        <div className='col-md-4'>
                            <ViewsAllsProducts></ViewsAllsProducts>
                        </div>
                        <div className='col-md-4'>
                            <ViewsAllsProducts></ViewsAllsProducts>
                        </div>
                        <div className='col-md-4'>
                            <ViewsAllsProducts></ViewsAllsProducts>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewAllProduct