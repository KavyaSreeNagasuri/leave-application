import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginPage from "./login";
import LoginContext from "../../loginContext";

export default function LoginComponent() {
  const { loginData } = useContext(LoginContext);

  console.log("loginDataa", loginData);
  return (
    <React.Fragment>
      {loginData.loginStatus ? (
        <Redirect to="/home/dashboard" />
      ) : (
        <LoginPage />
      )}
    </React.Fragment>
  );
}
