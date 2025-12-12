export type Product = {
  id: number;
  name: string;
  sales: number;
  views: number;
  conversionRate: number;
  trend: "up" | "down" | "stable";
};

export const topProducts: Product[] = [
  {
    id: 1,
    name: "Produkt A",
    sales: 1250,
    views: 5400,
    conversionRate: 23.1,
    trend: "up",
  },
  {
    id: 2,
    name: "Produkt B",
    sales: 980,
    views: 6100,
    conversionRate: 16.1,
    trend: "up",
  },
  {
    id: 3,
    name: "Produkt C",
    sales: 870,
    views: 4300,
    conversionRate: 20.2,
    trend: "stable",
  },
  {
    id: 4,
    name: "Produkt D",
    sales: 760,
    views: 5200,
    conversionRate: 14.6,
    trend: "down",
  },
  {
    id: 5,
    name: "Produkt E",
    sales: 640,
    views: 3900,
    conversionRate: 16.4,
    trend: "up",
  },
  {
    id: 6,
    name: "Produkt F",
    sales: 520,
    views: 4100,
    conversionRate: 12.7,
    trend: "stable",
  },
  {
    id: 7,
    name: "Produkt G",
    sales: 410,
    views: 3800,
    conversionRate: 10.8,
    trend: "down",
  },
  {
    id: 8,
    name: "Produkt H",
    sales: 360,
    views: 2950,
    conversionRate: 12.2,
    trend: "up",
  },
  {
    id: 9,
    name: "Produkt I",
    sales: 290,
    views: 2700,
    conversionRate: 10.7,
    trend: "stable",
  },
  {
    id: 10,
    name: "Produkt J",
    sales: 210,
    views: 2500,
    conversionRate: 8.4,
    trend: "down",
  },
];
