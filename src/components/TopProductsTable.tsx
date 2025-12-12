import React from "react";
import type { Product } from "../types/Product";

type TopProductsTableProps = {
  products: Product[];
};

const TopProductsTable: React.FC<TopProductsTableProps> = ({ products }) => {
  const getTrendSymbol = (trend: Product["trend"]) => {
    if (trend === "up") return "↑";
    if (trend === "down") return "↓";
    return "→";
  };

  return (
    <div className="top-products-table top-products-table__card">
      <div className="top-products-table__header top-products-table__row">
        <div className="top-products-table__cell top-products-table__cell--rank">
          #
        </div>
        <div className="top-products-table__cell top-products-table__cell--product">
          Produkt
        </div>
        <div className="top-products-table__cell top-products-table__cell--sales">
          Salg
        </div>
        <div className="top-products-table__cell top-products-table__cell--views">
          Visninger
        </div>
        <div className="top-products-table__cell top-products-table__cell--cr">
          CR
        </div>
        <div className="top-products-table__cell top-products-table__cell--trend">
          Trend
        </div>
      </div>

      <div className="top-products-table__body">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="top-products-table__row top-products-table__row--data"
          >
            <div className="top-products-table__cell top-products-table__cell--rank">
              <span className="top-products-table__rank-badge">
                {index + 1}
              </span>
            </div>
            <div className="top-products-table__cell top-products-table__cell--product">
              {product.name}
            </div>
            <div className="top-products-table__cell top-products-table__cell--sales">
              {product.sales.toLocaleString("nb-NO")}
            </div>
            <div className="top-products-table__cell top-products-table__cell--views">
              {product.views.toLocaleString("nb-NO")}
            </div>
            <div className="top-products-table__cell top-products-table__cell--cr">
              {product.conversionRate.toFixed(1)}%
            </div>
            <div className="top-products-table__cell top-products-table__cell--trend">
              {getTrendSymbol(product.trend)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsTable;
