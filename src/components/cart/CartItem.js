import React from "react";
import * as CurrencyFormat from "react-currency-format";

export default function CartItem(props) {
  const { id, deviceName, price, quantity, subTotal } = props.cartItem;
  const { removeItem, subQuantity, incQuantity } = props.props;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className=".col-10 mx-auto col-lg-2">
        <img
          src="/img/mobile1.png"
          alt="product"
          style={{ width: "5rem", height: "5erm" }}
          className="img-fluid"
        ></img>
      </div>
      <div className=".col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {deviceName}
      </div>
      <div className=".col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => subQuantity(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{quantity}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => incQuantity(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {/**/}
      <div className=".col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className=".col-10 mx-auto col-lg-2">
        <strong>
          <span>item total: </span>
          <CurrencyFormat
            value={subTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </strong>
      </div>
    </div>
  );
}
