import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../Auth";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let username = formData.get("username");

    auth.login(username, () => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
