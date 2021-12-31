import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: 10, marginBottom: "20px", borderRadius: "5px" }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: 10,
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      />
      <button style={{ padding: "10px", width: 100 }} onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
