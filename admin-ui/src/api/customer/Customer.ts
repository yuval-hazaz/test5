import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastNae: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
