import PropTypes from "prop-types";
import { createContext, useState } from "react";

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [firstLoading, setFirstLoading] = useState(true)
  const loading = {
    firstLoading,
    setFirstLoading,
  };
  // let data = { name: "prince", loginFirst: true };
  return (
    <LoginContext.Provider value={{ loading }}>
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { LoginContext, LoginProvider };
