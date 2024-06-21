export interface Product {
  availabilityStatus: string;
  brand: string;
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  thumbnail: string;
  shippingInformation: string;
  stock: number;
  tags: string[];
  reviews: Review[];
  rating: number;
}

export interface Review {
  comment: string;
  date: Date;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}
