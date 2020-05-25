import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/actions/cartActions";

function AddItemToCart(props) {
  const { cartItem, addToCart } = props;
  const addItemToCart = (event) => {
    addToCart({ ...cartItem });
    toast.info("Item added to cart successfully!!");
  };
  return (
    <Button basic color="red" onClick={addItemToCart}>
      Add to cart
    </Button>
  );
}

AddItemToCart.propTypes = {
  cartItem: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cartItem) => {
      dispatch(addToCart(cartItem));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemToCart);
