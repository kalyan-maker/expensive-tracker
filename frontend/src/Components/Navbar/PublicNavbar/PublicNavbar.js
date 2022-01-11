import React from "react";
import { Link } from "react-router-dom";

function PublicNavbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        id="publicnavbar"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-currency-exchange fs-1 text-warning "></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ bsScrollHeight: "100px" }}
            >
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  style={{ marginLeft: "12px", color: "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add-expense"
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Expense
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add-income"
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Income
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link
                to="/login"
                className="btn btn-success "
                style={{ color: "black", margin: "5px" }}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn btn-warning "
                style={{ color: "black", margin: "5px" }}
              >
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PublicNavbar;
