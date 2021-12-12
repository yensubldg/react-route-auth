import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./Routes";
import { Login } from "./Auth";
import { PrivatePage } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/private"
        element={
          <PrivateRoute>
            <PrivatePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
