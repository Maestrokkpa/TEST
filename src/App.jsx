
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Header from "./Components/Header";
import Admins from "./pages/Admins";

function App ()  {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admins" element={<Admins />} />
      </Routes>
    </div>
  );
};

export default App;