import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {MDBIcon} from 'mdbreact'
import AddItemToCart from "../cart/AddItemToCart";
import CartList from '../cart/CartList'
function Cart({cartItems}){

    return(
   
            <div className="container">
                <div className="cart">
                    <h5></h5>
                    <ul className="collection">
         {cartItems.length ? (
          <CartList
            cartItems={cartItems}
          />
        ) : (
          <div className="no-data-div">
            <p>Your Cart is Empty</p>
          </div>
        )}
                    </ul>
                </div>  
            </div>
       )
}

const mapStateToProps = (state)=>{
    return{
        cartItems: state.cart
    }
}

export default connect(mapStateToProps)(Cart)



