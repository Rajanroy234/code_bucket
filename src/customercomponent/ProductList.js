import React from 'react'
import ProductListItem from './ProductListItem'
import SearchProduct from './SearchProduct'
// import AddToCart from './SearchProduct'

function ProductList() {
  return (
    <div>
      <div>
        <SearchProduct></SearchProduct>
      </div>
      
      <div className='container my-3'>
        <h1>Product Card List Item</h1>
        <div className='row my-3'>
          <div className='col-md-4'>
            <ProductListItem></ProductListItem>
          </div>
          <div className='col-md-4'>
            <ProductListItem></ProductListItem>
          </div>
          <div className='col-md-4'>
            <ProductListItem></ProductListItem>
          </div>
        </div>


        <div className='row my-3'>
          <div className='col-md-4'>
            <ProductListItem></ProductListItem>
          </div>
          <div className='col-md-4'>
            <ProductListItem></ProductListItem>
          </div>
          <div className='col-md-4'>
            <ProductListItem></ProductListItem>
          </div>

        </div>

      </div>
      {/* <div>
        <AddToCart></AddToCart>
      </div> */}
    </div>
  )
}

export default ProductList
