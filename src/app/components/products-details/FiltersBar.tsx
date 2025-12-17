import React, { useState } from "react";

type Filters = {
  collection: string;
  category: string;
  period: string;
  sort: string;
};

interface FiltersBarProps {
  filters: Filters;
  onChange: (next: Filters) => void;
}

type OpenMenuKey = keyof Filters | null;

const COLLECTION_OPTIONS = ["Sommer", "Høst", "Vinter", "Vår"];
const CATEGORY_OPTIONS = ["Overdel", "Underdel", "Sko", "Tilbehør"];
const PERIOD_OPTIONS = [
  "I dag",
  "Siste 7 dager",
  "Siste 30 dager",
  "Egendefinert",
];
const SORT_OPTIONS = ["Mest solgt", "Minst solgt", "Høyest CR", "Minst CR"];

export const FiltersBar: React.FC<FiltersBarProps> = ({
  filters,
  onChange,
}) => {
  const [openMenu, setOpenMenu] = useState<OpenMenuKey>(null);

  const toggleMenu = (key: OpenMenuKey) => {
    setOpenMenu((current) => (current === key ? null : key));
  };

  const handleSelect = (key: keyof Filters, value: string) => {
    const next = { ...filters, [key]: value };
    onChange(next);
    setOpenMenu(null);
  };

  const renderDropdown = (key: keyof Filters, options: string[]) => {
    if (openMenu !== key) return null;

    return (
      <div className="filters-bar__dropdown">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className="filters-bar__dropdown-item"
            onClick={() => handleSelect(key, option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="filters-bar">
      <div className="filters-bar__group">
        <button
          type="button"
          className={`filters-bar__pill ${openMenu === "collection" ? "filters-bar__pill--active" : ""}`}
          onClick={() => toggleMenu("collection")}
        >
          Kolleksjon{filters.collection ? `: ${filters.collection}` : ""}
        </button>
        {renderDropdown("collection", COLLECTION_OPTIONS)}
      </div>

      <div className="filters-bar__group">
        <button
          type="button"
          className={`filters-bar__pill ${openMenu === "category" ? "filters-bar__pill--active" : ""}`}
          onClick={() => toggleMenu("category")}
        >
          Kategori{filters.category ? `: ${filters.category}` : ""}
        </button>
        {renderDropdown("category", CATEGORY_OPTIONS)}
      </div>

      <div className="filters-bar__group">
        <button
          type="button"
          className={`filters-bar__pill ${openMenu === "period" ? "filters-bar__pill--active" : ""}`}
          onClick={() => toggleMenu("period")}
        >
          Periode{filters.period ? `: ${filters.period}` : ""}
        </button>
        {renderDropdown("period", PERIOD_OPTIONS)}
      </div>

      <div className="filters-bar__group">
        <button
          type="button"
          className={`filters-bar__pill ${openMenu === "sort" ? "filters-bar__pill--active" : ""}`}
          onClick={() => toggleMenu("sort")}
        >
          Sorter{filters.sort ? `: ${filters.sort}` : ""}
        </button>
        {renderDropdown("sort", SORT_OPTIONS)}
      </div>
    </div>
  );
};

export default FiltersBar;
