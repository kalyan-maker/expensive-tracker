import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import EditContent from "./Components/Edit/EditContent";
import ProtectedRoute from "./Routes/ProtectedRoute";
import NotAdmin from "./Components/NotAdmin/NotAdmin";
import AddExpenses from "./Pages/Expenses/AddExpenses";
import ExpensesList from "./Pages/Expenses/ExpensesList";
import AddIncome from "./Pages/Income/AddIncome";
import IncomeList from "./Pages/Income/IncomeList";
import DashBoard from "./Pages/Users/DashBoard";
import Login from "./Pages/Users/Login";
import Register from "./Pages/Users/Register";
import Profile from "./Pages/Users/Profile";
import UpdateProfile from "./Pages/Users/UpdateProfile";
import UserProfileIncList from "./Pages/Users/UserProfileIncList";
import UserProfileExpList from "./Pages/Users/UserProfileExpList";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/expenses" component={ExpensesList} />
        <ProtectedRoute exact path="/incomes" component={IncomeList} />
        <ProtectedRoute exact path="/edit" component={EditContent} />
        <ProtectedRoute
          exact
          path="/update-profile"
          component={UpdateProfile}
        />
        <ProtectedRoute
          exact
          path="/user-expenses"
          component={UserProfileExpList}
        />
        <ProtectedRoute
          exact
          path="/user-income"
          component={UserProfileIncList}
        />
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
        <Route exact path="/not-found" component={NotAdmin} />
        <ProtectedRoute exact path="/add-income" component={AddIncome} />
        <ProtectedRoute exact path="/add-expense" component={AddExpenses} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
