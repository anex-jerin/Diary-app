import React from "react";
import Register from "./components/Register";
import Login from './components/Login'
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' replace />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
        

    </Routes>
  );
};

export default App;
