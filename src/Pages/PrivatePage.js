import { useNavigate } from "react-router-dom";
import useAuth from "../Auth";

function PrivatePage() {
  const navigate = useNavigate();
  const auth = useAuth();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h1>Welcome {auth.user}</h1>
      <p>This is a private page</p>
      <button
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default PrivatePage;
