import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
import Search from "./Search";
import { toast } from "react-toastify";
import SortProducts from "./SortProducts";

class ProductsPage extends React.Component {
  state = {
    searchResultFound: true,
  };
  componentDidMount() {
    const { products, actions } = this.props;

    if (products.length === 0) {
      actions.loadProducts().catch((error) => {
        alert("Loading products failed" + error);
      });
    }
  }

  search = async (searchValue) => {
    //debugger;
    let searchResult = false;
    try {
      await this.props.actions.searchProducts(searchValue);
      if (this.props.products.length === 0) {
        searchResult = false;
      } else {
        searchResult = true;
      }
    } catch (error) {
      searchResult = false;
      toast.error("Something Went wrong" + error.message, {
        autoClose: false,
      });
    }
    this.setState({
      searchResultFound: searchResult,
    });
  };

  sortingBasedOnPrice = async (order) => {
    //debugger;
    try {
      await this.props.actions.sortProducts(order);
    } catch (error) {
      toast.error("Something Went wrong" + error.message, {
        autoClose: false,
      });
    }
  };

  //   handleDeleteCourse = async course => {
  //     toast.success("Course deleted");
  //     try {
  //       await this.props.actions.deleteCourse(course);
  //     } catch (error) {
  //       toast.error("Delete failed. " + error.message, { autoClose: false });
  //     }
  //   };

  render() {
    return (
      <>
        <h2>Mobiles</h2>
        <SortProducts
          sortingBasedOnPrice={this.sortingBasedOnPrice}
        ></SortProducts>
        <Search search={this.search} />
        {this.state.searchResultFound ? (
          <ProductList products={this.props.products} />
        ) : (
          <div className="no-data-div">
            <p>No Data Availabe</p>
          </div>
        )}
      </>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  //debugger;
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProducts: bindActionCreators(productActions.loadProducts, dispatch),
      searchProducts: bindActionCreators(
        productActions.searchProducts,
        dispatch
      ),
      sortProducts: bindActionCreators(productActions.sortProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
