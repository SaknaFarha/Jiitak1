import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/dashboard");
  };
  const handleForget = () => {
    navigate("/password-setting");
  };

  return (
    <div className="login-container">
      <h1 className="logo-title">ルックミール</h1>
      <div className="login-box">
        <h2 className="login-title">ログイン</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">ログイン</button>
        </form>
        <p className="forgot-password" onClick={handleForget}>パスワードをお忘れの場合</p>
      </div>
    </div>
  );
};

export default LoginPage;
