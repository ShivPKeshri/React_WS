import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { numberOfCart } = useSelector((state) => state);

  useEffect(() => {
    let token = localStorage.getItem("token");
    // if (!token) {
    //   setLoggedIn(false);
    // } else {
    //   setLoggedIn(true);
    // }
    if (token) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const onLogoutHandler = () => {
    setLoggedIn(false);
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        GroceryApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {loggedIn ? (
          <div
            className="form-inline my-2 my-lg-0"
            style={{ marginRight: "1rem" }}
          >
            <Link to="/cart" className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span
                className="badge badge-light"
                style={{ marginLeft: "0.5rem" }}
              >
                {numberOfCart}
              </span>
            </Link>
          </div>
        ) : (
          <div></div>
        )}

        <div className="form-inline my-2 my-lg-0">
          {loggedIn ? (
            <Link className="btn btn-danger" onClick={onLogoutHandler}>
              Logout
            </Link>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
