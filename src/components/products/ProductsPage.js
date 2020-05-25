import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
import Search from "./Search";
import { toast } from "react-toastify";
import SortProducts from "./SortProducts";
import Pagination from "./filteration/Pagination";

class ProductsPage extends React.Component {
  state = {
    searchResultFound: true,
    query: "",
    currentPage: 1,
  };

  limit = 3;
  componentDidMount() {
    const { products, actions } = this.props;

    if (products.length === 0) {
      actions
        .loadProducts(this.state.currentPage, this.limit)
        .catch((error) => {
          alert("Loading products failed" + error);
        });
    }
  }

  nextPage = async (pageNumber) => {
    try {
      await this.props.actions.searchProducts(
        this.state.query,
        pageNumber,
        this.limit
      );
    } catch {
      toast.error("Something went wrong, Please try again");
    }
    this.setState({ currentPage: pageNumber });
  };

  search = async (searchValue) => {
    let searchResult = false;
    try {
      this.setState({
        query: searchValue,
      });
      await this.props.actions.searchProducts(
        searchValue,
        this.state.currentPage,
        3
      );
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

  sortingBasedOnPrice = (order) => {
    try {
      const sortedProducts = [...this.props.products].sort((a, b) => {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      });
      this.props.actions.sortProductsSuccess(
        sortedProducts,
        this.props.totalResultCount
      );
    } catch (error) {
      toast.error("Something Went wrong " + error.message, {
        autoClose: false,
      });
    }
  };

  render() {
    return (
      <>
        <h2>Mobiles</h2>

        <SortProducts
          sortingBasedOnPrice={this.sortingBasedOnPrice}
        ></SortProducts>
        <Search search={this.search} />

        <ProductList
          props={this.props}
          products={this.props.products}
          history={this.props.history}
        />
        {this.state.searchResultFound ? (
          <>
            {this.props.totalResultCount > 3 ? (
              <Pagination
                pages={this.props.pageNumbers}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            ) : (
              ""
            )}
          </>
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
  history: PropTypes.object.isRequired,
  totalResultCount: PropTypes.number.isRequired,
  pageNumbers: PropTypes.number.isRequired,
};

export function setPageNumbers(total) {
  return Math.ceil(total / 3);
}

function mapStateToProps(state) {
  const totalCount = parseInt(state.products.totalResultCount, 10);
  return {
    products: state.products.products,
    totalResultCount: totalCount,
    pageNumbers: totalCount > 0 ? setPageNumbers(totalCount) : 0,
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
      sortProductsSuccess: bindActionCreators(
        productActions.sortProductsSuccess,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
