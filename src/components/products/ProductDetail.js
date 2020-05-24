import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AddItemToCart from "../cart/AddItemToCart";
import * as CurrencyFormat from "react-currency-format";

function ProductDetail({ product }) {
  // return <h1> {product != null ? product.deviceName : null}</h1>;
  return (
    <div className="container py-5">
      {/*title */}
      {/* <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{product.deviceName}</h1>
                </div>
              </div> */}

      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            alt="product"
          />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h3 className="text-blue">
            <strong>{product.deviceName}</strong>
          </h3>

          <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
            <strong>
              Price:{" "}
              <CurrencyFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </strong>
          </h5>
          <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
            <strong>
              Color: <span>{product.color}</span>
            </strong>
          </h5>
          <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
            <strong>
              RAM: <span className="text uppercase">{product.ram}</span>
            </strong>
          </h5>
          <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
            <strong>
              Storage: <span className="text uppercase">{product.storage}</span>
            </strong>
          </h5>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            <strong>
              Screen Size:{" "}
              <span className="text uppercase">{product.screenDesc}</span>
            </strong>
          </h4>

          <p className="text-capitalize font-weight-bold mt-3 mb-2">
            <h4>
              <strong>Specifications:</strong>
            </h4>
          </p>
          <h5 className="text-title">{product.specifications}</h5>
          <br />

          {/* buttons */}
          <div>
            <Link to="/">
              <Button color="blue">Back to products</Button>
            </Link>
            <AddItemToCart cartItem={product}></AddItemToCart>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  products: PropTypes.array.isRequired,
};

export function getProductById(products, productId) {
  return products.find((product) => product.id === productId) || null;
}
function mapStateToProps(state, ownProps) {
  debugger;
  const productId = parseInt(ownProps.match.params.id, 10);
  const product =
    productId && state.products.length > 0
      ? getProductById(state.products, productId)
      : null;

  return {
    product,
    products: state.products,
  };
}

export default connect(mapStateToProps)(ProductDetail);
