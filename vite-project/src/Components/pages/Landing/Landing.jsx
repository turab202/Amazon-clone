import React from 'react'
import LayOut from '../../LayOut/LayOut'
import Carousel from '../../Carousel/CarouselEffect'
import Category from '../../Category/Category'
import Product from '../../Product/Product'
import ProductList from '../../Product/ProductList'
function Landing() {
  return (
    <div>
        <LayOut>
        <Carousel/>
       <Category/>
       <Product/>
       </LayOut>
    </div>
  )
}

export default Landing