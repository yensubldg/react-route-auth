import { useContext } from "react";
import { AuthContext } from "./Store";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
