import React from "react";
import currencyFormatter from "../../Utils/CurrencyFormatter";

function UserProfile({
  numOfTransExp,
  avgExp,
  totalExp,
  minExp,
  maxExp,
  numOfTransInc,
  avgInc,
  totalInc,
  minInc,
  maxInc,
}) {
  return (
    <section className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-6">
            <div className="p-8 border rounded-2">
              <div className="d-flex mb-6 align-items-start justify-content-between">
                <span
                  className="d-inline-flex align-items-center justify-content-center bg-light-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>
                {/* Expenses Start */}
                <span className="badge bg-light fs-2 text-primary">
                  Expenses
                </span>
              </div>
              <h1 className="mb-4">{currencyFormatter("INR", totalExp)}</h1>
              <p className="mb-0">
                <span>Number of Transactions</span>
                <span className="text-danger ms-1">
                  <span>{numOfTransExp}</span>
                </span>
              </p>

              <p className="mb-0">
                <span>Minimum Transactions</span>
                <span className="text-danger ms-1">
                  <span>{minExp}</span>
                </span>
              </p>

              <p className="mb-0">
                <span>Maximum Transactions</span>
                <span className="text-danger ms-1">
                  <span>{maxExp}</span>
                </span>
              </p>

              <p className="mb-0">
                <span>Average Transactions</span>
                <span className="text-danger ms-1">
                  <span>{avgExp}</span>
                </span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-6">
            <div className="p-8 border rounded-2">
              <div className="d-flex mb-6 align-items-start justify-content-between">
                <span
                  className="d-inline-flex align-items-center justify-content-center bg-danger-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>

                {/* Income Start */}
                <span className="badge fs-2 bg-primary-light text-primary">
                  Income Transactions
                </span>
              </div>
              <h1 className="mb-4 p-2">{currencyFormatter("INR", totalInc)}</h1>

              <p className="mb-0">
                <span>Number of Transactions</span>
                <span className="text-danger ms-1">
                  <span>{numOfTransInc}</span>
                </span>
              </p>

              <p className="mb-0">
                <span>Minimum Transactions</span>
                <span className="text-danger ms-1">
                  <span>{minInc}</span>
                </span>
              </p>

              <p className="mb-0">
                <span>Maximum Transactions</span>
                <span className="text-danger ms-1">
                  <span>{maxInc}</span>
                </span>
              </p>

              <p className="mb-0">
                <span>Average Transactions</span>
                <span className="text-danger ms-1">
                  <span>{avgInc}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
