import React from "react";
import { Button, Segment, Header, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const EmptyCart = () => (
  <Container>
    <Segment
      inverted
      tertiary
      placeholder
      color="green"
      style={{
        margin: "70px",
        width: "70%",
        left: "10%",
        position: "flex",
      }}
    >
      <Header icon>
        <Icon name="shopping bag" />
        Your Cart is Currently empty
      </Header>
      <Link to="/">
        <Button primary>Continue Shopping...</Button>
      </Link>
    </Segment>
  </Container>
);

export default EmptyCart;
