import React, { useEffect } from "react";
import "./App.css";
import { login, selectUser } from "./feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";

function App() {
  const user = useSelector(selectUser);
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
        {user ? <Route path="/" component={Home} exact /> : < Login />}
        <Route path="/aboutUs" component={AboutUs} />
      </div >
    </Router>
  );
}

export default App;
