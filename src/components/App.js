import React from "react";
import Navbar from "./common/Navbar";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ProductsPage from "./products/ProductsPage";
import ProductDetail from "./products/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./login/LoginForm"
import Cart from "./cart/Cart"

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/login" component={LoginForm} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} /> */}
        <Route component={PageNotFound}></Route>
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
    </div>
  );
}

export default App;
