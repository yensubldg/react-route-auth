import { useState, createContext } from "react";
const fakeAuthProvider = {
  isAuthenticated: false,
  login: (callback) => {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  logout: (callback) => {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100); // fake async
  },
};

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (user, callback) => {
    return fakeAuthProvider.login(() => {
      setUser(user);
      callback();
    });
  };

  const logout = (callback) => {
    return fakeAuthProvider.logout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
