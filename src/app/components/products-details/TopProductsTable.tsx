import React from "react";
import type { Product } from "../../../types/Product";

interface TopProductsTableProps {
  products: Product[];
}

const TopProductsTable: React.FC<TopProductsTableProps> = ({ products }) => {
  return (
    <div className="top-products-table">
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Salg</th>
            <th>Visninger</th>
            <th>CR</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sales.toLocaleString("nb-NO")}</td>
              <td>{product.views.toLocaleString("nb-NO")}</td>
              <td>{product.conversionRate.toFixed(1)}%</td>
              <td>{product.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsTable;
