import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE } from "./utils";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import AddTodoModal from "./components/modals/AddTodoModal";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  const isAuth = useSelector((user) => {
    return !!user.user.jwt;
  });

  return (
    <BrowserRouter>
      {isAuth ? <Navbar /> : <PublicNavbar />}
      <div className="main-container">
        <Routes>
          <Route path={BASE} element={<HomePage />} />
          <Route path={BASE + "login"} element={<Login />} />
          <Route path={BASE + "register"} element={<Register />} />
          <Route path={BASE + "profile"} element={<Profile />} />
          <Route path={BASE + "dashboard"} element={<Dashboard />} />
        </Routes>
      </div>
      <ToastContainer />
      <AddTodoModal />
    </BrowserRouter>
  );
}

export default App;
