import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { LoginPage } from './pages/login/Login';
import { CoffeeListPage } from './pages/coffeeList/CoffeeList';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/coffeeshop" element={<CoffeeListPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
