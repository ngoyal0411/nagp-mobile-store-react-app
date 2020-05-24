import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Image } from "semantic-ui-react";
import * as CurrencyFormat from "react-currency-format";
import AddItemToCart from "../cart/AddItemToCart";

function ProductList(props) {
  const { products, history, actions } = props;
  const viewProductDetail = (event) => {
    const id = event.target.value;
    history.push("product/" + id);
  };
  return (
    <Card.Group
      style={{
        justifyContent: "center",
      }}
    >
      {products.map((product) => {
        return (
          <div key={product.id} className="projects-grid">
            <Card
              shadow={4}
              style={{
                margin: "20px 30px 20px 30px",
                minHeight: "450px",
                textAlign: "center",
              }}
            >
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header
                  style={{
                    height: "20px",
                  }}
                >
                  {product.deviceName}
                </Card.Header>
                <Card.Meta
                  style={{
                    height: "30px",
                  }}
                >
                  {}
                </Card.Meta>
                <Card.Description
                  style={{
                    margin: "5px",
                    height: "30px",
                  }}
                >
                  <CurrencyFormat
                    value={product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    value={product.id}
                    basic
                    color="green"
                    onClick={viewProductDetail}
                  >
                    View
                  </Button>
                  <AddItemToCart
                    cartItem={product}
                    actions={actions}
                  ></AddItemToCart>
                 
                </div>
              </Card.Content>
            </Card>
          </div>
        );
      })}
    </Card.Group>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default ProductList;
