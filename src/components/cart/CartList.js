import React from "react";
import CartItem from "./CartItem";

function CartList(props) {
  const { cartItems } = props;
  console.log(props);
  return (
    <div className="container-fluid">
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} props={props} />;
      })}
    </div>
  );
}

export default CartList;
