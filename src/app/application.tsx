import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { DashboardPage } from "./pages/DashboardPage";
import ProductsDetailsPage from "./pages/products-details/ProductsDetailsPage";

const basename = (import.meta as any).env.BASE_URL?.replace(/\/$/, "") || "";

export function Application() {
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
