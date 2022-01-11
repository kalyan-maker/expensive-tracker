import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { fetchAccountStatsAction } from "../../Redux/account";
import currencyFormatter from "../../Utils/CurrencyFormatter";

function DashBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccountStatsAction());
  }, [dispatch]);

  const account = useSelector((state) => state.account);
  const { loading, accountDetails, appErr, serverErr } = account;

  return (
    <>
      {loading ? (
        <Loading />
      ) : appErr || serverErr ? (
        <Error>
          {serverErr} {appErr}
        </Error>
      ) : (
        <section className="py-6">
          <div className="container">
            {/* Grpah */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              {/* Grpah */}
              {/* <DataGrap income={totalInc} expenses={totalExp} /> */}
            </div>
            {/* Net Profit */}
            <div style={{ textAlign: "center", margin: "20px" }}>
              {/* <h2 className="text-success">Net Profit : {formattedNetProfit}</h2> */}
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-6">
                <div className="p-8 border rounded-2">
                  <div className="d-flex mb-6 align-items-start justify-content-between">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-light-light rounded-2"
                      style={{ width: "40px", height: "40px" }}
                    ></span>
                    {/* Expenses Start */}
                    <span className="badge fs-2 bg-light text-danger">
                      Total Expenses
                    </span>
                  </div>
                  <h1 className="mb-4">
                    {currencyFormatter(
                      "INR",
                      accountDetails?.expenseStats[0]?.totalExp
                    )}
                  </h1>
                  <p className="mb-0">
                    <span>Number of Transactions</span>
                    <span className="text-danger ms-1">
                      <span>
                        {accountDetails?.expenseStats[0]?.totalRecordsExp}
                      </span>
                    </span>
                  </p>

                  <p className="mb-0">
                    <span>Minimum Transactions</span>
                    <span className="text-danger ms-1">
                      <span>{accountDetails?.expenseStats[0]?.minExp}</span>
                    </span>
                  </p>

                  <p className="mb-0">
                    <span>Maximum Transactions</span>
                    <span className="text-danger ms-1">
                      <span>{accountDetails?.expenseStats[0]?.maxExp}</span>
                    </span>
                  </p>

                  <p className="mb-0">
                    <span>Average Transactions</span>
                    <span className="text-danger ms-1">
                      <span>{accountDetails?.expenseStats[0]?.averageExp}</span>
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
                      Total Income
                    </span>
                  </div>
                  <h1 className="mb-4">
                    {currencyFormatter(
                      "INR",
                      accountDetails?.incomeStats[0]?.totalIncome
                    )}
                  </h1>

                  <p className="mb-0">
                    <span>Number of Transactions</span>
                    <span className="text-danger ms-1">
                      <span>
                        {accountDetails?.incomeStats[0]?.totalRecordsIncome}
                      </span>
                    </span>
                  </p>

                  <p className="mb-0">
                    <span>Minimum Transactions</span>
                    <span class="text-danger ms-1">
                      <span>
                        {accountDetails?.incomeStats[0]?.totalRecordsIncome}
                      </span>
                    </span>
                  </p>

                  <p className="mb-0">
                    <span>Maximum Transactions</span>
                    <span class="text-danger ms-1">
                      <span>{accountDetails?.incomeStats[0]?.maxIncome}</span>
                    </span>
                  </p>

                  <p className="mb-0">
                    <span>Average Transactions</span>
                    <span className="text-danger ms-1">
                      <span>
                        {accountDetails?.incomeStats[0]?.averageIncome}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default DashBoard;
