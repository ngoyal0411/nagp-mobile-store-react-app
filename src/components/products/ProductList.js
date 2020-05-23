import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Image } from "semantic-ui-react";
import * as CurrencyFormat from "react-currency-format";

const ProductList = ({ products }) => (
  <Card.Group
    itemsPerRow={3}
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
                <Button basic color="green">
                  View
                </Button>
                <Button basic color="red">
                  Add to cart
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      );
    })}
  </Card.Group>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
