import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { LoginPage } from './pages/login/Login';
import { CoffeListPage } from './pages/coffeList/CoffeList';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/coffeshop" element={<CoffeListPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
