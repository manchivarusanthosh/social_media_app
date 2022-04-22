import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("santhosh");
  const [password, setPassword] = useState("12345");
  const navigate = useNavigate();
  const onFormSubmit = () => {
    if (email === "santhosh" && password === "12345") {
      navigate("/home");
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="loginButton" onClick={() => onFormSubmit()}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
