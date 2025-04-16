import React from 'react';
import classes from './category.module.css';

function CategoryCard({ data }) {
  if (!data) return null;

  return (
    <div className={classes.category}>
      <a href={`#${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imglink} alt={data.title} />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;

