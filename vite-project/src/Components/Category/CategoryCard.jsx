import React from 'react';
import classes from './category.module.css';
import { Link } from 'react-router-dom';

function CategoryCard({ data }) {
  if (!data) return null;

  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name.toLowerCase()}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imglink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;


