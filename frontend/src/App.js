import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { login, selectUser } from "./feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from "./components/Auth/LoginForm";
import SignUpForm from "./components/Auth/SignUpForm";



function App() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Login />
        {/* {user ? <Route path="/" element={<Home />}/> : < Login />} */}
      </div>
      <div className="auth-inner">
        {/* <Routes> */}
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} exact />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        {/* </Routes> */}
      </div>
    </Router>
  );
}

export default App;
