import React from 'react';
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import {SlLocationPin} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import {BiCart} from "react-icons/bi";
import  LowerHeader from './LowerHeader.jsx';
function Header() {
  return (
    <>
        <section>
        <div className={classes.header__container}>
            {/*logo section*/}
            <div className={classes.logo__container}>
            <a href="#">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=" amazon logo" />
            </a>
            
            < div className={classes.delivery}>
            <span>
              <SlLocationPin/>
            </span>
            
            <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
            </div>
        </div>
        </div>
             {/*search*/}
             <div className= {classes.search}>
             <select name="" id="">
                <option value="">All</option>
             </select>
            <input type="text"/>
             <BsSearch size ={39}/>
        </div>
         {/*right side link*/}
        < div className={classes.order__container}>
            <a href="" className={classes.language}>
                <img src="https://i.pinimg.com/736x/19/6c/71/196c7135b622240c8119ae26cd0750d4.jpg" alt="" />
                <select>
                    <option value="">Am</option>
                </select>
                </a>
            <a href="/signUp">
                <p>sign in</p>
                <span>Account $ lists</span>
            </a>
            <a href="/orders">
                <p>returns</p>
                <span>&Orders</span>
            </a>
            <a  href='/cart' className={classes.cart}>
                <BiCart size ={35}/>
                <span>0</span>
            </a>
        </div>
        </div>
    </section>
    <LowerHeader/>
</> 
 )
}

export default Header;