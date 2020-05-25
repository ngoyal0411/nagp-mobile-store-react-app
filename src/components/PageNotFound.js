import React from "react";
import { Button, Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PageNotFound = (props) => (
  <Segment
    inverted
    tertiary
    placeholder
    style={{
      margin: "50px",
      width: "50%",
      left: "20%",
      position: "flex",
    }}
  >
    <Header>
      <div className="row">
        <div className="col-10 mx-auto text-center text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h1>page not found</h1>
          <h3>
            the requested url
            <span className="text-danger">{props.location.pathname}</span> was
            not found
          </h3>
        </div>
      </div>
    </Header>
    <Link to="/">
      <Button primary>Continue Shopping</Button>
    </Link>
  </Segment>
);
export default PageNotFound;
