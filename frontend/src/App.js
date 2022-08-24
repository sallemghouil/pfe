import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import ListBlog from "./components/Blog/ListBlog";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashborad/Dashboard";
import Contact from "./components/Contact/Contact";
import PrivateRoute from "./components/PrivateRoute";
import FormationList from "./components/FormationList"
import Profile from "./components/Profile/Profile";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrent } from "./JS/actions/userActions";
import EditProfile from "./components/Profile/editProfile/editProfile";

function App() { 
  const dispatch=useDispatch();
  useEffect(()=>dispatch(getCurrent()));

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
            </div>
          }
        />
        <Route
          path="/Home"
          element={
            <div>
              <NavBar />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div>
              <NavBar />
              <Login />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <NavBar />
              <SignUp />
            </div>
          }
        />
        <Route
          path="/blog"
          element={
            <div>
              <NavBar />
              <ListBlog />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <NavBar />
              <Contact />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <Dashboard />
              ) : (
                <PrivateRoute />
              )}
            </div>
          }
        />
<Route
          path="/Fomations"
          element={
            <div>
              {localStorage.getItem("token") ? (
              <div>
                <NavBar />
                <FormationList />
                </div>
              ) : (
                <PrivateRoute />
              )}
            </div>
          }
        />
        
        <Route
          path="/Profile"
          element={
            <div>
              {localStorage.getItem("token") ? (
               <div> <NavBar />
                <Profile />
                </div>
              ) : (
                <PrivateRoute />
              )}
            </div>
          }
        />
        <Route
          path="/Profile/Profile"
          element={
            <div>
              {localStorage.getItem("token") ? (
               <div> <NavBar />
                <EditProfile />
                </div>
              ) : (
                <PrivateRoute />
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;