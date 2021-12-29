import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./Store";

import { Header } from "./components";
import { Login } from "./auth";
import { Home, News, Contact } from "./Pages";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/protected"
          element={<RequireAuth>Protected</RequireAuth>}
        />
      </Routes>
    </>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
