import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    // product: ProductSlice,
    // user: UserSlice,
    // cart: CartSlice,
    // address: AddressSlice,
    // review: ReviewSlice,
    // order: OrderSlice,
  },
});
