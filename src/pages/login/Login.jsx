import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/User";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./login.css"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => ({
    token: state.userReducer.token,
  }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (token) {
      navigate("/profil");
    }
  }, [navigate, token]);
  const onLogin = (e) => {
    e.preventDefault();
    const body = { email, password };
    userLogin(body, dispatch);
   
    
  };
  return (
    <main className="main bg-dark">
      <div className="sign-in-content">
      <FaUserCircle className="fa fa-user-circle-login" />
        <div className="titre">Sign In</div>
        <form onSubmit={onLogin}>
          <div className="input-wrapper">
            <p>Email </p>
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />

            <p>Mot de passe </p>
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            className="sign-in-button"
            id="signUpSubmit"
            type="submit"
            value="Connexion"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
