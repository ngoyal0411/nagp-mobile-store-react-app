import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Image } from "semantic-ui-react";
import * as CurrencyFormat from "react-currency-format";
import AddItemToCart from "../cart/AddItemToCart";
import { Link } from 'react-router-dom'
import {MDBIcon} from 'mdbreact'

function CartList(props) {
  const { cartItems } = props;
 
  return (
   cartItems.map(item=>{
                    return(
                        <li className="collection-item avatar" key={item.id}>
                        
                                    <div className="item-img"> 
                                        <img src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" alt="cart" className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.deviceName}</span>
                                        <p>{item.screenDesc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><MDBIcon icon="plus" /></Link>
                                            <p>{item.quantity}</p>
                                            <Link to="/cart"><MDBIcon icon="minus" /></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove">Remove</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
  );
}

export default CartList;
