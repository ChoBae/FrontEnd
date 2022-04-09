import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // useState 사용 로그인 상태를 boolean 형태로 처리
  // useEffect 한번만 사용할때 디펜던시 안줌, 로그인한 상태 유지 -> 이게 없으면 리로드했을때 로그인 상태가 풀리게됨.
  useEffect(() => {
    const storedUserLoggedInInfomation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfomation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // 로그인 핸들러 -> 로그인시 로그인한 상태를 적용(true) 기본값이 false
  const loginHandler = (email, password) => {
    // 로컬스토리지 기본 기능 사용 로그인한 상태를 표시 -> 백엔드나 서버단으로 넘겨주는 느낌
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  // 로그아웃 핸들러 -> 로그아웃시 로그아웃한 상태를 적용(false) 기본값이 false
  const logoutHandler = () => {
    // 로컬스토리지 기본 기능 사용 로그인한 상태를 표시 -> 백엔드나 서버단으로 넘겨주는 느낌
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
