const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const path = require("path");

app.use(express.json());

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//middlewares
app.use(cors());

const user = require("./routes/userRoute");
const account = require("./routes/accountRoute");
const expense = require("./routes/expenseRoute");
const income = require("./routes/incomeRoute");

app.use("/api/users", user);

app.use("/", account);

app.use("/api/expenses", expense);

app.use("/api/income", income);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Error
app.use(notFound);
app.use(errorHandler);

module.exports = app;
