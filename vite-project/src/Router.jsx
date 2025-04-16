import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Components/pages/Landing/Landing';
import Signin from './Components/pages/Auth/Signup';
import Payment from './Components/pages/Payment/Payment';
import Orders from './Components/pages/Orders/Orders';
import Cart from './Components/pages/Cart/Cart';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Signin />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/orders" element={<Orders />} />
                {/* <Route path="/category/:categoryName" element={<Results />} /> */}
                
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default Routing;

