
import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};



export default MainRoutes;
