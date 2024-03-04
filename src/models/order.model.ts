export interface Order {
  id: number;
  bookTitle: string;
  totalAmount: number;
  totalPrice: number;
  receiver: string;
  contact: string;
  address: string;
  createdAt: string;
}

export interface OrderSheet {
  items: number[];
  totalAmount: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: Delivery;
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderDetailItem {
  bookId: number;
  title: string;
  author: string;
  amount: number;
  price: number;
}

export interface OrderListItem extends Order {
  detail?: OrderDetailItem[];
}
