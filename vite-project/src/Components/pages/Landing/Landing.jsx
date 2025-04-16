import React from 'react'
import LayOut from '../../LayOut/LayOut'
import Carousel from '../../Carousel/CarouselEffect'
import Category from '../../Category/Category'
function Landing() {
  return (
    <div>
        <LayOut>
        <Carousel/>
       <Category/>
       </LayOut>
    </div>
  )
}

export default Landing