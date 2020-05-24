import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PageNotFound = (props) => (
  // <div className="no-data-div">
  //   <h2>OOPs! Page Not Found</h2>
  // </div>
  <div className="container">
    <div className="row">
      <div className="col-10 mx-auto text-center text-uppercase pt-5">
        <h1 className="display-3">404</h1>
        <h1>error</h1>
        <h1>page not found</h1>
        <h3>
          the requested url
          <span className="text-danger">{props.location.pathname}</span> was not
          found
        </h3>
        <br />
        <Link to="/">
          <Button color="blue">Back to home page</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default PageNotFound;
