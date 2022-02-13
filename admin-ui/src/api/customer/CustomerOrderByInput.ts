import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastNae?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
