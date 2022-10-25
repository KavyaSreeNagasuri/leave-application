import "./App.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LoginComponent from "./components/login";
import HomePage from "./components/home";
import LoginContext from "./loginContext";
import { usersList, leavesList } from "./mock";
import { useState } from "react";
import LeaveContext from "./leaveContext";

function App() {
  const [loginData, setLoginData] = useState({
    users: usersList,
    loginStatus: false,
    loggedInDetails: {},
    isInvalidUser: false,
  });

  const [leaveData, setLeaveData] = useState(leavesList);

  return (
    <div className="App">
      <LoginContext.Provider value={{ loginData, setLoginData }}>
        <LeaveContext.Provider value={{ leaveData, setLeaveData }}>
          <Switch>
            <Route exact path="/login" component={LoginComponent} />
            <Route path="/home" component={HomePage} />
            <Redirect from="/" to="/login" />
          </Switch>
        </LeaveContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default withRouter(App);
