import React from "react";
import type { Product } from "../../../types/Product";
import "./ProductsChart.css";

interface ProductsChartProps {
  products: Product[];
}

const ProductsChart: React.FC<ProductsChartProps> = ({ products }) => {
  if (products.length === 0) return null;

  const maxSales = Math.max(...products.map((p) => p.sales));

  return (
    <div className="products-chart">
      <h2>Salg per produkt</h2>
      <div className="products-chart-body">
        {products.map((p) => {
          const width = (p.sales / maxSales) * 100;
          return (
            <div key={p.id} className="products-chart-row">
              <span className="products-chart-label">{p.name}</span>
              <div className="products-chart-bar-wrapper">
                <div
                  className="products-chart-bar"
                  style={{ width: `${width}%` }}
                >
                  <span className="products-chart-bar-value">
                    {p.sales.toLocaleString("nb-NO")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsChart;
