import React, { useContext } from "react";
import { connect } from "react-redux";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "../cart/CartList";
import PropTypes from "prop-types";
import CartCheckout from "./CartCheckout";
import {
  removeItem,
  subtractQuantity,
  increaseQuantity,
  clearCart,
} from "../../redux/actions/cartActions";
import { toast } from "react-toastify";
import { UserContext } from "../../context/context";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Cart({
  cartItems,
  removeItem,
  subQuantity,
  incQuantity,
  clearCart,
  cartTotal,
  history,
}) {
  const [user] = useContext(UserContext);
  const placeOrder = () => {
    if (user.isLoggedIn) {
      clearCart();
      toast.success("Order Placed Successfully!!", { autoClose: false });
      history.push("/");
    } else {
      history.push("/login");
    }
  };
  return (
    <section>
      {cartItems.length ? (
        <>
          <br></br>
          <Link to="/">
            <Button prime color="blue">
              Continue Shopping..
            </Button>
          </Link>
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5 ">
            <h1>Your Cart</h1>
          </div>
          <CartColumns />
          <CartList
            cartItems={cartItems}
            removeItem={removeItem}
            subQuantity={subQuantity}
            incQuantity={incQuantity}
          />
          <CartCheckout
            cartTotal={cartTotal}
            clearCart={clearCart}
            placeOrder={placeOrder}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
  incQuantity: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
export function getCartTotalAmount(cartItems) {
  let total = 0;
  cartItems.map((product) => (total += product.subTotal));
  return total;
}
const mapStateToProps = (state) => {
  const cartTotal = state.cart.length > 0 ? getCartTotalAmount(state.cart) : 0;
  return {
    cartItems: state.cart,
    cartTotal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    subQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
    incQuantity: (id) => {
      dispatch(increaseQuantity(id));
    },
    clearCart: () => {
      dispatch(clearCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
