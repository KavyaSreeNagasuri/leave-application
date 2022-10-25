import { createContext } from "react";

const LoginContext = createContext({
  loginData: [],
  setLoginData: (data) => {},
});

export default LoginContext;
