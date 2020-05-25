import React from "react";
import { Button } from "semantic-ui-react";
import * as CurrencyFormat from "react-currency-format";

export default function CartCheckout({ placeOrder, cartTotal, clearCart }) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className=".col-10 mt-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h5>
              <span>
                <strong>Total: </strong>
              </span>
              <CurrencyFormat
                value={cartTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </h5>
            <div>
              {" "}
              <Button
                basic
                onClick={() => clearCart()}
                className="btn btn-outLine-danger text-uppercase mb-3 px-5"
                negative
              >
                clear cart
              </Button>
              <Button
                onClick={() => placeOrder()}
                className="btn btn-outLine-danger text-uppercase mb-3 px-5"
                color="blue"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
