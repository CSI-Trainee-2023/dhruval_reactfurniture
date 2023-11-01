// import React from "react";
import NavBar from "./MyComponents/NavBar"
import Footer from "./MyComponents/Footer"

import emptyCart from "./assets/images/emptyCart.png"

export default function Cart(){
    // const[cartList, addtoCart] => UseState({});

    return(
        <>
        <NavBar />

        <div className="cartBody">
            
            <img src={emptyCart} alt="" />

        </div>

        <Footer />
        </>
    )
}