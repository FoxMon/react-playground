import { StoreApi, create } from "zustand";

interface Item {
  id: number;
  name: string;
  price: number;
}

interface Store {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  totalPrice: () => number;
}

export const useCartStore = create<Store>()(
  (set: StoreApi<Store>["setState"], get: StoreApi<Store>["getState"]) => ({
    items: [],
    addItem: (item: Item) =>
      set((state) => ({ items: [...state.items, item] })),
    removeItem: (id: number) =>
      set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
    totalPrice: () =>
      get().items.reduce((total, item) => total + item.price, 0),
  })
);
