import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CarPage from "../../pages/CarPage";
import DatailPage from "../../pages/DatailPage";

const AppContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarPage />} />
        <Route path="/:id" element={<DatailPage />} />
      </Routes>
    </div>
  );
};

export default AppContent;
