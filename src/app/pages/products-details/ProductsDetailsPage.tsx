import React, { useState, useMemo } from "react";
import "./ProductsDetailsPage.css";

import FiltersBar from "../../components/products-details/FiltersBar";
import ProductsChart from "../../components/products-details/ProductsChart";
import TopProductsTable from "../../components/products-details/TopProductsTable";

import { topProducts } from "../../../types/Product";

const ProductsDetailsPage: React.FC = () => {
  const [filters, setFilters] = useState({
    collection: "Sommer",
    category: "Overdel",
    period: "I dag",
    sort: "Mest solgt",
  });

  const products = useMemo(() => {
    let result = [...topProducts];

    if (filters.sort === "Mest solgt") {
      result.sort((a, b) => b.sales - a.sales);
    }

    return result;
  }, [filters.sort]);

  return (
    <div className="products-details-page">
      <h1>Topplister</h1>

      <FiltersBar filters={filters} onChange={setFilters} />

      <div className="products-details-row">
        <div className="card">
          <ProductsChart products={products} />
        </div>
        <div className="card">
          <TopProductsTable products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
