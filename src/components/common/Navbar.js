import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/context";
import { toast } from "react-toastify";
import LogoutDropdown from "./LogoutDropdown";

const Navbar = (props) => {
  const [user, setUserState] = useContext(UserContext);
  const logout = () => {
    toast.info("Log out successfully!!");
    setUserState((prevUser) => ({
      ...prevUser,
      isLoggedIn: false,
    }));
  };

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Mobile Store
        </Link>

        <ul className="right">
          {user && !user.isLoggedIn ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
              <LogoutDropdown
                username={user.username}
                logout={logout}
              ></LogoutDropdown>
            </li>
          )}
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
