export interface Product {
  product_id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  thumbnail: string;
  price: number;
  availableColors: string[];
  availableSizes: string[];
  availableStocks: number;
  createdBy: string;
  createdOn: string;
  updatedOn: string;
}
