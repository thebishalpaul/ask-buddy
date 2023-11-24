import React from "react";
import "./App.css";
//import Login from "./components/Auth/Login";
import Home from "./components/Home";
import { selectUser } from "./feature/userSlice";
import { useSelector } from "react-redux";
import Login from "./components/auth/login";



function App() {
  const user = useSelector(selectUser)
  return ( 
    <div className="App">
      {user ? <Home/>:<Login/>}
    </div>
  );
}

export default App;
