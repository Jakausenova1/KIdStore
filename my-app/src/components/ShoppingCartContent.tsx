import { useContext, createContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContent = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

type CartItem = {
    id: number;
    quantity: number;
}

const ShoppingCartContent = createContext({} as ShoppingCartContent);

export function useShoppingCart() {
  return useContext(ShoppingCartContent);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [carItems, setCartItems] =useState<CartItem[]>([])
  return (
    <ShoppingCartContent.Provider value={{}}>
      {children}
    </ShoppingCartContent.Provider>
  );
}
