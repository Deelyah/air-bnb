export interface IPrice {
  unitPrice: string;
  cleaningFee: string;
  serviceFee: string;
}

export interface IBeaches {
  name: string;
  host: string;
  date: string;
  rating: string;
  price: IPrice;
  images: string[];
}
