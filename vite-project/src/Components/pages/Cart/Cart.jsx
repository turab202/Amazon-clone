// src/Components/pages/Cart/Cart.jsx
import React, { useContext } from 'react';
import LayOut from '../../LayOut/LayOut';
import { DataContext } from '../../DataProvider/DataProvider';
import ProductCard from '../../Product/ProductCard';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import classes from './Cart.module.css';
import { Type } from '../../../Utility/action.type';

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  const total = basket.reduce((amount, item) => amount + item.price * item.amount, 0);

  return (
    <LayOut>
      <section className={classes.cartContainer}>
        <div className={classes.cartItemsSection}>
          <h2>Hello, {user?.name || 'Guest'}</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            <div className={classes.cartItemsContainer}>
              {basket.map((item, i) => (
                <section key={i} className={classes.cart_product}>
                  <ProductCard product={item} renderDesc={true} />
                  <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={() => increment(item)}>+</button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={() => decrement(item.id)}>-</button>
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>

        {basket.length !== 0 && (
          <div className={classes.cartSummary}>
            <p>
              Subtotal ({basket.reduce((total, item) => total + item.amount, 0)} items):{' '}
              <strong>
                <CurrencyFormat amount={total} />
              </strong>
            </p>
            <div className={classes.giftOption}>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">This order contains a gift</label>
            </div>
            <Link to="/payments" className={classes.checkoutButton}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;


