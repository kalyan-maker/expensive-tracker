import React from "react";
import img from "../../Images/graph.jpg";

const Home = () => {
  return (
    <section className="position-relative pb-5">
      <img
        className="d-none d-lg-block position-absolute top-0 start-0 bottom-0 w-50 h-100 img-fluid"
        style={{ objectFit: "cover", margin: "10px" }}
        src={img}
        alt=""
      />
      <div className="position-relative">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-lg-5 ms-auto">
              <div className="mb-5">
                <h2 className="display-4 fw-bold mb-5">
                  Keep Track of Your Income & Expenses
                </h2>
                <p className="lead text-muted mb-5">
                  View all your income and expenses flow from your team in one
                  dashboard
                </p>
                <div className="d-flex flex-wrap">
                  <a href="/#" className="btn btn-primary me-2 mb-2 mb-sm-0">
                    Track your performance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
