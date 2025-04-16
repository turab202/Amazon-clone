import React from 'react'
import {CategoryInfos} from './Categoryfullinfos'
import classes from './Category.module.css'
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <div>
    <section className= {classes.category__container}>
      {
          CategoryInfos.map((infos)=>{
          return  <CategoryCard data = {infos}/>
          }
        
        
        )
      }
    </section>

        
    </div>
  )
}

export default Category