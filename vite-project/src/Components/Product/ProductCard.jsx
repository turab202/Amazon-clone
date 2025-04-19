import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./ProductCard.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, renderDesc = false }) {

  // ✅ Prevent crash if product is undefined
  if (!product) return null;

  const {
    image = "",
    title = "No title",
    id,
    rating = { rate: 0, count: 0 },
    price = 0,
  } = product;

  const [state, dispatch] = useContext(DataContext);

  const [addedToCart, setAddedToCart] = useState(false);

 const addToCart = () => {
  dispatch({
    type: Type.ADD_TO_BASKET,
    item: {
      id,
      image,
      title,
      price,
      rating,
    },
  });
  setAddedToCart(true);
};


  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.img_container} />
      </Link>

      <h3>{title}</h3>

      <div className={classes.rating}>
        <Rating value={rating.rate} precision={0.1} readOnly />
        <small>({rating.count})</small>
      </div>

      <CurrencyFormat amount={price} />
      {!renderDesc && (
      <button
  className={addedToCart ? classes.addedButton : classes.button}
  onClick={addToCart}
  disabled={addedToCart}
>
  {addedToCart ? "✔️ Added" : "Add to Cart"}
</button>
)}
    </div>
  );
}

export default ProductCard;







