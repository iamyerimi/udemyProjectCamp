import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/authSlice";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>로그인 상태입니다.</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인되지 않았습니다.</p>
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
}

export default App;
