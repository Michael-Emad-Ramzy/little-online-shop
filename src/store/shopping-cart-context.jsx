import { createContext } from "react";

// this CartContext is a const stores the context
//wich store an opject that contain an item contains an empty array
//which we will use as a component in anthor components as the app comp...
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});
