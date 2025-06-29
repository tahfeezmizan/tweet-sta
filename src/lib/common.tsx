export interface SectionHeadProps {
  subheading?: string;
  heading: string;
  highlight: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description?: string;
  backgroundColor?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  restaurant: string;
  deliveryTime: string;
  deliveryFee: string;
}
