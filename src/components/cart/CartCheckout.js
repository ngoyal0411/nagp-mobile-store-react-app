import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import * as CurrencyFormat from "react-currency-format";

export default function CartCheckout(props) {
  const { cartTotal, clearCart } = props;
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
              <Link to="/">
                <Button
                  basic
                  onClick={() => clearCart()}
                  className="btn btn-outLine-danger text-uppercase mb-3 px-5"
                  negative
                >
                  clear cart
                </Button>
              </Link>
              <Link to="/">
                <Button
                  onClick={() => clearCart()}
                  className="btn btn-outLine-danger text-uppercase mb-3 px-5"
                  color="blue"
                >
                  Place Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
