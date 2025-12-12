import React from "react";
import type { Product } from "../types/Product";

type ProductsChartProps = {
  products: Product[];
};

const ProductsChart: React.FC<ProductsChartProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="products-chart products-chart__card">
        <div className="products-chart__title">Salg per produkt</div>
        <div className="products-chart__empty">Ingen data</div>
      </div>
    );
  }

  const maxSales = Math.max(...products.map((p) => p.sales)) || 1;

  const getWidthPercent = (sales: number) => `${(sales / maxSales) * 100}%`;

  return (
    <div className="products-chart products-chart__card">
      <div className="products-chart__title">Salg per produkt</div>

      <div className="products-chart__plot">
        {products.map((product, index) => {
          const label = product.name || `Produkt ${index + 1}`;
          // Derive a short label (e.g. "A", "B", ...) from the product name if it follows "Produkt X"
          const shortLabel =
            label.match(/Produkt\s+([A-Z])/i)?.[1]?.toUpperCase() ??
            String.fromCharCode(65 + index); // fallback A, B, C...

          return (
            <div key={product.id} className="products-chart__row">
              <div className="products-chart__row-label">{shortLabel}</div>
              <div className="products-chart__row-bar-wrapper">
                <div
                  className="products-chart__row-bar"
                  style={{ width: getWidthPercent(product.sales) }}
                />
                <div className="products-chart__row-value">
                  {product.sales.toLocaleString("nb-NO")}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="products-chart__x-axis">
        <span className="products-chart__x-axis-label">Salg</span>
      </div>
    </div>
  );
};

export default ProductsChart;
